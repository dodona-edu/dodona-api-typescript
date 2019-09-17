import { ExerciseAccessDeniedException } from "../exceptions/accessdenied/exercise_access_denied_exception";
import { ExerciseNotFoundException } from "../exceptions/notfound/exercise_not_found_exception";
import { HttpClient } from "../http/http_client";
import { Exercise, ExerciseJSON } from "../resources/exercise";
import { AbstractManager } from "./abstract_manager";
import { Series } from "../resources/series";
import { PartialSubmission } from "../resources/partial_submission";
import { Course } from "../resources/course";
import { Response } from "node-fetch";

/**
 * Implementation of ExerciseManager.
 */
export class ExerciseManager extends AbstractManager {
	/**
	 * ExerciseManagerImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	public constructor(host: string, http: HttpClient) {
		super(host, http, (url) => new ExerciseAccessDeniedException(url), (url) => new ExerciseNotFoundException(url));
	}

	public getAll(series :Series): Promise<Exercise[]> {
		return this.parseExcercises(this.get(series.getExercisesUrl()));
	}

	public getExcerciseOfCourse(courseId :number, exerciseId :number): Promise<Exercise> {
		let result = this.parseExcercise(this.get(this.url(`/courses/${courseId}/exercises/${exerciseId}`)));
		return result;
	}

	public getExcercise(exerciseId :number): Promise<Exercise> {
		let result = this.parseExcercise(this.get(this.url(`exercises/${exerciseId}`)));
		return result;
	}

	public getFromPartialSubmission(submission :PartialSubmission): Promise<Exercise> {
		let exerciseId :number|null = Exercise.getId(submission.getExerciseUrl())
		if (exerciseId === null) throw new ExerciseNotFoundException(submission.getExerciseUrl());
		let course_url :string = submission.getCourseUrl();
		
		if (course_url !== ""){
			let courseId :number|null = Course.getId(course_url);
			if (courseId !== null) return this.getExcerciseOfCourse(courseId, exerciseId);
		}
		return this.getExcercise(exerciseId);
	}

	private parseExcercise(resp_promise : Promise<Response>) : Promise<Exercise>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return Exercise.fromJSON(json);
		});
	}

	private parseExcercises(resp_promise : Promise<Response>) : Promise<Exercise[]>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return  json.map((exercise :ExerciseJSON) => Exercise.fromJSON(exercise));
		});
	}
}

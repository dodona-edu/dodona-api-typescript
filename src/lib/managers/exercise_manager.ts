import { ExerciseAccessDeniedException } from "../exceptions/accessdenied/exercise_access_denied_exception";
import { ExerciseNotFoundException } from "../exceptions/notfound/exercise_not_found_exception";
import { HttpClient } from "../http/http_client";
import { Exercise } from "../resources/exercise";
import { AbstractManager } from "./abstract_manager";
import { Series } from "../resources/series";
import { PartialSubmission } from "../resources/partial_submission";
import { Course } from "../resources/course";

/**
 * Implementation of ExerciseManager.
 */
class ExerciseManager extends AbstractManager<Exercise> {
	private static readonly ENDPOINT_EXERCISES :string = "/exercises";
	private static readonly ENDPOINT_EXERCISES_ID :string = ExerciseManager.ENDPOINT_EXERCISES + "/${exerciseId}";

	private static readonly ENDPOINT_COURSES_EXERCISES_ID: string = "/courses/${courseId}" + ExerciseManager.ENDPOINT_EXERCISES_ID;

	/**
	 * ExerciseManagerImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	public constructor(host: string, http: HttpClient<Exercise>) {
		super(host, http, (url) => new ExerciseAccessDeniedException(url), (url) => new ExerciseNotFoundException(url));
	}

	public getAll(series :Series): Promise<Exercise[]> {
		return this.parse(this.get(series.getExercisesUrl()));
	}

	public getExcerciseOfCourse(courseId :number, exerciseId :number): Promise<Exercise> {
		return this.parse(this.get(this.url(`/courses/${courseId}/exercises/${exerciseId}`)))[0];
	}

	public getExcercise(exerciseId :number): Promise<Exercise> {
		return this.parse(this.get(this.url(`exercises/${exerciseId}`)))[0];
	}

	public getFromPartialSubmission(submission :PartialSubmission): Promise<Exercise> {
		let exerciseId :number = Exercise.getId(submission.getExerciseUrl())
		let courseId :number = Course.getId(submission.getCourseUrl());
		return this.getExcerciseOfCourse(courseId, exerciseId) || this.getExcercise(exerciseId);
	}

	private parse(resp_promise : Promise<Response>) : Promise<Exercise[]>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return JSON.parse(json, Exercise.reviver);
		});
	}
}

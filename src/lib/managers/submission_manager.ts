import { AbstractManager } from "./abstract_manager";
import { Submission } from "../resources/submission";
import { Course } from "../resources/course";
import { Series } from "../resources/series";
import { Exercise } from "../resources/exercise";
import { User } from "../resources/user";
import { HttpClient } from "../http/http_client";
import { SubmissionAccessDeniedException } from "../exceptions/accessdenied/submission_access_denied_exception";
import { SubmissionNotFoundException } from "../exceptions/notfound/submission_not_found_exception";
import { PartialSubmission, PartialSubmissionJSON } from "../resources/partial_submission";

/**
 * Implementation of SubmissionManager.
 */
export class SubmissionManager extends AbstractManager{
	private readonly user :User;
	
	/**
	 * SubmissionManager constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 * @param user user accessor
	 */
	public constructor(host :string, http :HttpClient, user :User) {
		super(host, http, (url) => new SubmissionAccessDeniedException(url), (url) => new SubmissionNotFoundException(url));
		this.user = user;
	}
	
	public create(course :Course,
	              series :Series,
	              exercise :Exercise,
	              solution :string) :Promise<number>{
		let courseId :number = course.getId();
		let seriesId :number = series.getId();
		return this.createWithIds(courseId, seriesId, exercise.getId(), solution);
	}
	
	public async createWithIds(courseId :number,
						 seriesId :number,
						 exerciseId :number,
						 solution :string) :Promise<number> {
		let body :string = JSON.stringify({"course_id": courseId,
										   "exercise_id": exerciseId,
										   "series_id": seriesId,
										   "code": solution})
		console.log(body)
		let url :string = this.url("/submissions");
		let json = await this.post(url, body); // .then(resp => resp.json());
		return json.status;
	}
	
	public getById(id :number) :Promise<Submission> {
		return this.parseSub(this.get(this.url(`/submissions/${id}`)));
	}
	
	public getByPartialSub(partial :PartialSubmission) :Promise<Submission> {
		return this.parseSub(this.get(partial.getUrl()));
	}
	
	public getAll(user :User) :Promise<PartialSubmission[]> {
		return this.parsePartials(this.get(user.getSubmissionsUrl()));
	}
	
	public getAllByMe(exercise :Exercise) :Promise<PartialSubmission[]> {
		return this.getAllByMeWithId(exercise.getId());
	}
	
	
	public getAllByMeWithIds(courseId :number, exerciseId :number) :Promise<PartialSubmission[]> {
		let endpoint :string = `${this.user.getSubmissionsUrl()}?course_id=${courseId}&exercise_id=${exerciseId}`;
		return this.parsePartials(this.get(endpoint));
	}

	public getAllByMeWithId(exerciseId :number) :Promise<PartialSubmission[]> {
		let endpoint :string = `${this.user.getSubmissionsUrl()}?exercise_id=${exerciseId}`;
		return this.parsePartials(this.get(endpoint));
	}

	private parseSub(resp_promise : Promise<Response>) : Promise<Submission>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return Submission.fromJSON(json);
		});
	}

	private parsePartials(resp_promise : Promise<Response>) : Promise<PartialSubmission[]>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return json.map((partial :PartialSubmissionJSON) => PartialSubmission.fromJSON(partial));
		});
	}
}

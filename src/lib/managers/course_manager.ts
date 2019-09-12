import { AbstractManager} from "./abstract_manager";
import { Course } from "../resources/course";
import { HttpClient } from "../http/http_client";
import { CourseAccessDeniedException } from "../exceptions/accessdenied/course_access_denied_exception";
import { CourseNotFoundException } from "../exceptions/notfound/course_not_found_exception";
import { PartialSubmission } from "../resources/partial_submission";
import { Exercise } from "../resources/exercise";

/**
 * Implementation of CourseManager.
 */
export class CourseManager extends AbstractManager<Course> {
	private static readonly ENDPOINT_COURSES :string = "/courses/%d";
	
	/**
	 * CourseManagerImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	public constructor(host :string, http :HttpClient) {
		super(host, http, (url) => new CourseAccessDeniedException(url), (url) => new CourseNotFoundException(url));
	}
	
	public getCourse(id :number) :Promise<Course> {
		return this.parse(this.get(this.url(`/courses/${id}`)));
	}
	
	public getPartialSubmissionCourse(submission :PartialSubmission) :Promise<Course> {
		return this.parse(this.get(submission.getCourseUrl()));
	}


	private parse(resp_promise : Promise<Response>) : Promise<Course>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return JSON.parse(json, Course.reviver);
		});
	}
}

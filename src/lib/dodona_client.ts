import { HttpClient } from "./http/http_client";
import { CourseManager } from "./managers/course_manager";
import { ExerciseManager } from "./managers/exercise_manager";
import { SeriesManager } from "./managers/series_manager";
import { SubmissionManager } from "./managers/submission_manager";
import { UserManager } from "./managers/user_manager";
import { User } from "./resources/user";

/**
 * Implementation of DodonaClient.
 */
export class DodonaClient  {
	private readonly courses :CourseManager;
	private readonly exercises :ExerciseManager;
	private readonly series :SeriesManager;
	private readonly submissions :SubmissionManager;
	private readonly users :UserManager;
	private readonly me :User;
	
	/**
	 * DodonaClientImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	private constructor(host :string, http :HttpClient, user :User) {
		this.courses = new CourseManager(host, http);
		this.exercises = new ExerciseManager(host, http);
		this.series = new SeriesManager(host, http);
		this.submissions = new SubmissionManager(host, http, user);
		this.users = new UserManager(host, http);
		this.me = user;
	}
	
	public getCourses() :CourseManager {
		return this.courses;
	}
	
	public getExercises() :ExerciseManager {
		return this.exercises;
	}
	public static async getDodonaClient(host :string, http :HttpClient) : Promise<DodonaClient>{
		let user :User = await http.get(host).then(resp => resp.json())
											 .then(json => {
												 return User.fromJSON(json.user);
												});
		return new DodonaClient(host, http, user);
	}
	
	public getMe() :User{
		return this.me;
	}

	public getSeries() :SeriesManager {
		return this.series;
	}
	
	public getSubmissions() :SubmissionManager {
		return this.submissions;
	}
	
	public getUsers() :UserManager {
		return this.users;
	}
}

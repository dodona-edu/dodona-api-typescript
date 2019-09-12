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
	private readonly host :string;
	private readonly http :HttpClient;
	private readonly courses :CourseManager;
	private readonly exercises :ExerciseManager;
	private readonly series :SeriesManager;
	private readonly submissions :SubmissionManager;
	private readonly users :UserManager;
	
	/**
	 * DodonaClientImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	private constructor(host :string, http :HttpClient, user :User) {
		this.host = host;
		this.http = http;
		this.courses = new CourseManager(host, http);
		this.exercises = new ExerciseManager(host, http);
		this.series = new SeriesManager(host, http);
		this.submissions = new SubmissionManager(host, http, user);
		this.users = new UserManager(host, http);
	}
	
	public getCourses() :CourseManager {
		return this.courses;
	}
	
	public getExercises() :ExerciseManager {
		return this.exercises;
	}
	public static async getDodonaClient(host :string, http :HttpClient) : Promise<DodonaClient>{
		let user :User = await http.get(host).then(resp => resp.json()).then(json => user = JSON.parse(json, User.reviver));
		return new DodonaClient(host, http, user);
	}

	public async getMe() :Promise<User> {
		let user :User;
		await this.http.get(this.host).then(resp => resp.json()).then(json => user = JSON.parse(json, User.reviver))
		return user;
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

import { HttpClient } from "./http/http_client";
import { CourseManager } from "./managers/course_manager";
import { ExerciseManager } from "./managers/exercise_manager";
import { SeriesManager } from "./managers/series_manager";
import { SubmissionManager } from "./managers/submission_manager";
import { UserManager } from "./managers/user_manager";
import { User, UserJSON } from "./resources/user";

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
		let json :UserJSON = await http.get(host).then(resp => resp.json());
		let user :User = await User.fromJSON(json);
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

	public Equals(other :DodonaClient){
		return this.users.Equals(other.getUsers()) &&
			   this.me.Equals(other.getMe()) &&
			   this.submissions.Equals(other.getSubmissions()) &&
			   this.series.Equals(other.getSeries()) &&
			   this.courses.Equals(other.getCourses()) &&
			   this.exercises.Equals(other.getExercises());
	}
}

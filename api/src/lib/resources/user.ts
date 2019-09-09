import { Course } from "./course";
import { compare } from "./helperfunctions";
/**
 * A user on Dodona.
 */
class User {
	private readonly correctExercises :number;
	private readonly firstName :string;
	private readonly id :number;
	private readonly lastName :string;
	private readonly submissionCount :number;
	private readonly submissionsUrl :string;
	private readonly subscribedCourses :Course[];
	private readonly url :string;
	
	/**
	 * UserImpl constructor.
	 *
	 * @param correctExercises  amount of correct solved exercises
	 * @param firstName         first name
	 * @param id                id
	 * @param lastName          last name
	 * @param submissionCount   amount of submitted exercises
	 * @param submissionsUrl    url to fetch submissions
	 * @param subscribedCourses list of subscribed courses
	 * @param url               url
	 */
	constructor(correctExercises :number,
	                firstName :string,
	                id :number,
	                lastName :string,
	                submissionCount :number,
	                submissionsUrl :string,
	                subscribedCourses :Course[],
	                url :string) {
		this.correctExercises = correctExercises;
		this.firstName = firstName;
		this.id = id;
		this.lastName = lastName;
		this.submissionCount = submissionCount;
		this.submissionsUrl = submissionsUrl;
		this.subscribedCourses = subscribedCourses;
		this.url = url;
	}
	
	public compareTo(o: User) :number {
		let compareLast :number = compare(this.lastName.toLowerCase(), o.getLastName().toLowerCase());
		return compareLast != 0 ? compareLast : compare(this.firstName.toLowerCase(), o.getFirstName().toLowerCase());
	}
	
	public getCorrectExercises() :number {
		return this.correctExercises;
	}
	
	public getFirstName() :string {
		return this.firstName;
	}
    
    public getId() :number {
		return this.id;
	}
	
	public getLastName() :string {
		return this.lastName;
    }
	
	public getSubmissionCount() :number {
		return this.submissionCount;
	}
	
	public getSubmissionsUrl() :string {
		return this.submissionsUrl;
	}
	
	public getSubscribedCourses() :Course[] {
		return this.subscribedCourses;
	}
	
	public getUrl() :string {
		return this.url.replace(".json", "");
	}
	
	public tostring() :string {
		return `User{id=${this.id}, firstName=${this.firstName}, lastName=${this.lastName}}`;
	}
}

import { Course, CourseJSON } from "./course";
import { compare } from "../helperfunctions";
import { Resource } from "./resource";
/**
 * A user on Dodona.
 */
export class User extends Resource{
	private readonly correctExercises: number;
	private readonly firstName: string;
	private readonly lastName: string;
	private readonly submissionCount: number;
	private readonly submissionsUrl: string;
	private readonly subscribedCourses: Course[];

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
	constructor(correctExercises: number,
	            firstName: string,
	            id: number,
	            lastName: string,
	            submissionCount: number,
	            submissionsUrl: string,
	            subscribedCourses: Course[],
	            url: string) {
		super(id, url)
		this.correctExercises = correctExercises;
		this.firstName = firstName;
		this.lastName = lastName;
		this.submissionCount = submissionCount;
		this.submissionsUrl = submissionsUrl;
		this.subscribedCourses = subscribedCourses;
	}

	public compareTo(o: User): number {
		const compareLast: number = compare(this.lastName.toLowerCase(), o.getLastName().toLowerCase());
		return compareLast != 0 ? compareLast : compare(this.firstName.toLowerCase(), o.getFirstName().toLowerCase());
	}

	public getCorrectExercises(): number {
		return this.correctExercises;
	}

	public getFirstName(): string {
		return this.firstName;
	}

	public getLastName(): string {
		return this.lastName;
    }

	public getSubmissionCount(): number {
		return this.submissionCount;
	}

	public getSubmissionsUrl(): string {
		return this.submissionsUrl;
	}

	public getSubscribedCourses(): Course[] {
		return this.subscribedCourses;
	}

	public getUrl(): string {
		return this.url.replace(".json", "");
	}

	public toString(): string {
		return `User{id=${this.getId()}, firstName=${this.firstName}, lastName=${this.lastName}}`;
	}

	static fromJSON(json: UserJSON|string): User {
		if (typeof json === "string"){
			return JSON.parse(json, User.reviver);
		}
		return new User(json.correct_exercises, 
						json.first_name,
						json.id,
						json.last_name,
						json.submission_count,
						json.submissions,
						json.subscribed_courses.map(course => Course.fromJSON(course)),
						json.url,
						);
	}

	static reviver(key: string, value: any): any {
		return key === "" ? User.fromJSON(value) : value;
	}
}

export interface UserJSON{
	correct_exercises: number;
	first_name: string;
	id: number;
	last_name: string;
	submission_count: number;
	submissions: string;
	subscribed_courses: CourseJSON[];
	url: string;
}

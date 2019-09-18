import {compare} from "../helperfunctions";
import {Resource} from "./resource";
import { SubmissionStatus } from "../data/submission_status";

/**
 * A submission on Dodona.
 */
export class Submission extends Resource {
	private readonly accepted: boolean;
	private readonly code: string;
	private readonly createdAt: Date;

	private readonly courseUrl: string;

	private readonly exerciseUrl: string;
	private readonly status: SubmissionStatus;
	private readonly summary: string;
	
	/**
	 * SubmissionImpl constructor.
	 *
	 * @param accepted  the acceptance status
	 * @param code      the code
	 * @param course    the course url
	 * @param createdAt the creation timestamp
	 * @param exercise  the exercise url
	 * @param id        the id
	 * @param status    the status
	 * @param summary   the summary
	 * @param url       the url
	 */
	public constructor(accepted: boolean,
                       code: string,
					   course: string,
					   createdAt: Date,
					   exercise: string,
					   id: number,
					   status: SubmissionStatus,
					   summary: string,
					   url: string) {
		super(id, url);
		this.accepted = accepted;
		this.code = code;
		this.courseUrl = course;
		this.createdAt = createdAt;
		this.exerciseUrl = exercise;
		this.status = status;
		this.summary = summary;
	}

	public compareTo(o: Submission): number {
		return compare(this.createdAt, o.getCreatedAt());
	}

	public getCode(): string {
		return this.code;
	}

	public getCourseUrl(): string {
		return this.courseUrl;
	}

	public getCreatedAt(): Date {
		return this.createdAt;
	}

	public getExerciseUrl(): string {
		return this.exerciseUrl;
	}
	
	public getStatus(): SubmissionStatus {
		return this.status;
	}

	public getSummary(): string {
		return this.summary;
	}

	public getUrl(): string {
		return this.url.replace(".json", "");
	}

	public isAccepted(): boolean {
		return this.accepted;
	}

	public toString(): string {
		return `Submission{${this.id}, ${this.status.getName()}}`;
	}

	static fromJSON(json: SubmissionJSON|string) :Submission {
		if (typeof json === "string"){
			return JSON.parse(json, Submission.reviver);
		}
		return new Submission(json.accepted, 
							  json.code,
							  json.course,
							  new Date(json.created_at),
							  json.exercise,
							  json.id,
							  SubmissionStatus.byName(json.status),
							  json.summary,
							  json.url
							);
	}

	static reviver(key: string, value: any): any {
		return key === "" ? Submission.fromJSON(value) : value;
	}
}

export interface SubmissionJSON{
	accepted: boolean;
	code: string;
	course: string;
	created_at: string;
	exercise: string;
	id: number;
	status: string;
	summary: string;
	url: string;
}
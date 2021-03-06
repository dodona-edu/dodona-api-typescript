import { SubmissionStatus } from "../data/submission_status";
import { Resource } from "./resource";

/**
 * A partal submission on Dodona.
 */
export class PartialSubmission extends Resource {
	private readonly accepted :boolean;
	private readonly createdAt :Date;
	
	private readonly courseUrl :string;
	
	private readonly exerciseUrl :string;
	private readonly status :SubmissionStatus;
	private readonly summary :string;
	
	/**
	 * PartialSubmissionImpl constructor.
	 *
	 * @param accepted  the acceptance status
	 * @param course    the course url
	 * @param createdAt the creation timestamp
	 * @param exercise  the exercise url
	 * @param id        the id
	 * @param status    the status
	 * @param summary   the summary
	 * @param url       the url
	 */
	public constructor(accepted :boolean,
					   course :string,
					   createdAt :Date,
					   exercise :string,
					   id :number,
					   status :SubmissionStatus,
					   summary :string,
					   url :string) {
		super(id, url);
		this.accepted = accepted;
		this.courseUrl = course;
		this.createdAt = createdAt;
		this.exerciseUrl = exercise;
		this.status = status;
		this.summary = summary;
	}
	
	public getCourseUrl() :string {
		return this.courseUrl;
	}
	
	public getCreatedAt() :Date {
		return this.createdAt;
	}
	
	public getExerciseUrl() :string {
		return this.exerciseUrl;
	}
	
	public getStatus() :SubmissionStatus {
		return this.status;
	}
	
	public getSummary() :string {
		return this.summary;
	}
	
	public getUrl() :string {
		return this.url.replace(".json", "");
	}
	
	public isAccepted() :boolean {
		return this.accepted;
	}
	
	public toString() :string {
		return `Submission{id=${this.id}, status=${this.status.getName()}}`;
	}

	static fromJSON(json: PartialSubmissionJSON|string) :PartialSubmission {
		if (typeof json === "string"){
			return JSON.parse(json, PartialSubmission.reviver);
		}
		return new PartialSubmission(json.accepted, 
							         json.course ? json.course : "",
							         new Date(json.created_at),
							         json.exercise ? json.exercise : "",
							         json.id,
							         SubmissionStatus.byName(json.status),
							         json.summary,
							         json.url ? json.url : ""
									);
	}

	static reviver(key: string, value: any): any {
		return key === "" ? PartialSubmission.fromJSON(value) : value;
	}
}

export interface PartialSubmissionJSON{
	accepted: boolean;
	course: string;
	created_at: string;
	exercise: string;
	id: number;
	status: string;
	summary: string;
	url: string;
}
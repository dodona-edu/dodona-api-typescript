import { SubmissionStatus, SubmissionStatusEnum } from "../data/submission_status";

/**
 * A partal submission on Dodona.
 */
export class PartialSubmission {
	private readonly accepted :boolean;
	private readonly createdAt :Date;
	
	private readonly courseUrl :string;
	
	private readonly exerciseUrl :string;
	private readonly id :number;
	private readonly status :SubmissionStatusEnum;
	private readonly summary :string;
	private readonly url :string;
	
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
					   status :SubmissionStatusEnum,
					   summary :string,
					   url :string) {
		this.accepted = accepted;
		this.courseUrl = course;
		this.createdAt = createdAt;
		this.exerciseUrl = exercise;
		this.id = id;
		this.status = status;
		this.summary = summary;
		this.url = url;
	}
	
	public getCourseUrl() :string|null {
		return this.courseUrl;
	}
	
	public getCreatedAt() :Date {
		return this.createdAt;
	}
	
	public getExerciseUrl() :string {
		return this.exerciseUrl;
	}
	
	public getId() :number {
		return this.id;
	}
	
	public getStatus() :SubmissionStatusEnum {
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
		return `Submission{id=${this.id}, status=${this.status}}`;
	}

	static fromJSON(json: PartialSubmissionJSON|string) :PartialSubmission {
		if (typeof json === "string"){
			return JSON.parse(json, PartialSubmission.reviver);
		}
		return new PartialSubmission(json.accepted === "true", 
							         json.course,
							         new Date(json.createdAt),
							         json.exercise,
							         json.id,
							         SubmissionStatus.byName(json.status),
							         json.summary,
							         json.url,
									);
	}

	static reviver(key: string, value: any): any {
		return key === "" ? PartialSubmission.fromJSON(value) : value;
	}
}

export interface PartialSubmissionJSON{
	accepted: string;
	course: string;
	createdAt: string;
	exercise: string;
	id: number;
	status: string;
	summary: string;
	url: string;
}
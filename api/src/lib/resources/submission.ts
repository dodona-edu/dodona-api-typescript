import {Resource} from "./resource";
import {compare} from "./helperfunctions"

/**
 * A submission on Dodona.
 */
class Submission implements Resource{
	private readonly accepted :boolean;
	private readonly code :string;
	private readonly createdAt :Date;
	
	private readonly courseUrl :string;
	
	private readonly exerciseUrl :string;
	private readonly id :number;
	private readonly status :SubmissionStatus;
	private readonly summary :string;
	private readonly url :string;
	
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
	public constructor(accepted :boolean,
                       code :string,
                       course :string,
                       createdAt :Date,
                       exercise :string,
                       id :number,
                       status :SubmissionStatus,
                       summary :string,
                       url :string){
		this.accepted = accepted;
		this.code = code;
		this.courseUrl = course;
		this.createdAt = createdAt;
		this.exerciseUrl = exercise;
		this.id = id;
		this.status = status;
		this.summary = summary;
		this.url = url;
	}
	
	public compareTo(o :Submission) : number{
		return compare(this.createdAt, o.getCreatedAt());
	}
	
	public getCode() : string {
		return this.code;
	}
	
	public getCourseUrl() : string {
		return this.courseUrl;
	}
	
	public getCreatedAt() : Date {
		return this.createdAt;
	}
	
	public getExerciseUrl() : string {
		return this.exerciseUrl;
	}
	
	public getId() : number{
		return this.id;
	}
	
	public getStatus() : SubmissionStatus {
		return this.status;
	}
	
	public getSummary() : string {
		return this.summary;
	}

	public getUrl() : string {
		return this.url.replace(".json", "");
	}
	
	public isAccepted() : boolean {
		return this.accepted;
	}
	
	public tostring() : string {
		return `Submission{${this.id}, ${this.status}}`;
	}
}

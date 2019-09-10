import { DodonaException } from "./dodonaexception";

/**
 * A required submission status was not found.
 */
class SubmissionStatusNotFoundException extends DodonaException {
	private readonly status :string;
	
	/**
	 * SubmissionStatusNotFoundException constructor.
	 *
	 * @param status the name of the status that was not found
	 */
	public constructor(status :string) {
		super(`No submission status was found for "${status}".`);
		this.status = status;
	}
	
	/**
	 * Gets the name of the status that was not found.
	 *
	 * @return the status
	 */
	public getStatus() :string {
		return this.status;
	}
	
	public toString() :string {
		return `SubmissionStatusNotFoundException{status=${this.status}}`;
	}
}

import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A submission that can not be found.
 */
class SubmissionNotFoundException extends ResourceNotFoundException {
	private readonly url :string;
	
	/**
	 * SubmissionNotFoundException constructor.
	 *
	 * @param url the url of the submission that was not found
	 */
	public constructor(url :string) {
		super(`No submission was found at the given url: ${url}.`);
		this.url = url;
	}
	
	/**
	 * Gets the url of the submission that can not be found.
	 *
	 * @return the url
	 */
	public getSubmissionUrl() :string {
		return this.url;
	}
	
	public toString() :string {
		return `SubmissionNotFoundException{url=${this.url}}`;
	}
}
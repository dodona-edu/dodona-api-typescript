import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A submission that can not be found.
 */
export class SubmissionNotFoundException extends ResourceNotFoundException {
	private readonly url: string;

	__proto__ :ResourceNotFoundException

	/**
	 * SubmissionNotFoundException constructor.
	 *
	 * @param url the url of the submission that was not found
	 */
	public constructor(url: string) {
		super(`No submission was found at the given url: ${url}.`);
		this.url = url;
		this.__proto__ = SubmissionNotFoundException.prototype;
	}

	/**
	 * Gets the url of the submission that can not be found.
	 *
	 * @return the url
	 */
	public getSubmissionUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `SubmissionNotFoundException{url=${this.url}}`;
	}
}

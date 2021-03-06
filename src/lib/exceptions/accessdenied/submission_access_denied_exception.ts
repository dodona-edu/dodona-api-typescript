import { ResourceAccessDeniedException } from "./resource_access_denied_exception";

/**
 * A submission that may not be accessed.
 */
export class SubmissionAccessDeniedException extends ResourceAccessDeniedException {
	private readonly url: string;

	__proto__ :ResourceAccessDeniedException;
	/**
	 * SubmissionAccessDeniedException constructor.
	 *
	 * @param url the url of the submission that may not be accessed
	 */
	public constructor(url: string) {
		super(`You may not access the submission at url ${url}.`);
		this.url = url;
		this.__proto__ = SubmissionAccessDeniedException.prototype;
	}

	/**
	 * Gets the url of the submission that may not be accessed.
	 *
	 * @return the url
	 */
	public getSubmissionUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `SubmissionAccessDeniedException{url=${this.url}}`;
	}

}

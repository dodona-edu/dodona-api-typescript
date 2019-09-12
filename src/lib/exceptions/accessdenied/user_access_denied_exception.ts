import { ResourceAccessDeniedException } from "./resource_access_denied_exception";

/**
 * A user that may not be accessed.
 */
export class UserAccessDeniedException extends ResourceAccessDeniedException {
	private readonly url: string;

	/**
	 * UserAccessDeniedException constructor.
	 *
	 * @param url the url of the user that may not be accessed
	 */
	public constructor(url: string) {
		super(`You may not access the user at url ${url}.`);
		this.url = url;
	}

	/**
	 * Gets the url of the user that may not be accessed.
	 *
	 * @return the url
	 */
	public getUserUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `UserAccessDeniedException{url=${this.url}}`;
	}

}

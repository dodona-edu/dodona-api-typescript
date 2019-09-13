import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A user that can not be found.
 */
export class UserNotFoundException extends ResourceNotFoundException {
	private readonly url: string;

	__proto__ :ResourceNotFoundException;
	/**
	 * UserNotFoundException constructor.
	 *
	 * @param url the url of the user that was not found
	 */
	public constructor(url: string) {
		super(`No user was found at the given url: ${url}.`);
		this.url = url;
		this.__proto__ = UserNotFoundException.prototype;
	}

	/**
	 * Gets the url of the user that can not be found.
	 *
	 * @return the url
	 */
	public getUserUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `UserNotFoundException{url=${this.url}}`;
	}
}

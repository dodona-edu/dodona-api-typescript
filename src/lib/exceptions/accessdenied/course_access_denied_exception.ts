import { ResourceAccessDeniedException } from "./resource_access_denied_exception";

/**
 * A course that may not be accessed.
 */
export class CourseAccessDeniedException extends ResourceAccessDeniedException {
	private readonly url: string;
	__proto__ : ResourceAccessDeniedException;
	/**
	 * CourseAccessDeniedException constructor.
	 *
	 * @param url the url of the course that may not be accessed
	 */
	public constructor(url: string) {
		super(`You may not access the course at url ${url}.`);
		this.url = url;
		this.__proto__ = CourseAccessDeniedException.prototype;
	}

	/**
	 * Gets the url of the course that may not be accessed.
	 *
	 * @return the url
	 */
	public getCourseUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `CourseAccessDeniedException{url=${this.url}}`;
	}

}

import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A course that can not be found.
 */
export class CourseNotFoundException extends ResourceNotFoundException {
	private readonly url: string;

	__proto__ :ResourceNotFoundException
	/**
	 * CourseNotFoundException constructor.
	 *
	 * @param url the url of the course that was not found
	 */
	public constructor(url: string) {
		super(`No course was found at the given url: ${url}.`);
		this.url = url;
		this.__proto__ = CourseNotFoundException.prototype;
	}

	/**
	 * Gets the url of the course that can not be found.
	 *
	 * @return the url
	 */
	public getCourseUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `CourseNotFoundException{url=${this.url}}`;
	}
}

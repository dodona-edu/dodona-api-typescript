import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A exercise that can not be found.
 */
export class ExerciseNotFoundException extends ResourceNotFoundException {
	private readonly url: string;

	__proto__ :ResourceNotFoundException;
	/**
	 * ExerciseNotFoundException constructor.
	 *
	 * @param url the url of the exercise that was not found
	 */
	public constructor(url: string) {
		super(`No exercise was found at the given url: ${url}.`);
		this.url = url;
		this.__proto__ = ExerciseNotFoundException.prototype;
	}

	/**
	 * Gets the url of the exercise that can not be found.
	 *
	 * @return the url
	 */
	public getExerciseUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `ExerciseNotFoundException{url=${this.url}}`;
	}
}

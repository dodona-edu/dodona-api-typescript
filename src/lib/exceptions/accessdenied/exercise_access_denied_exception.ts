import { ResourceAccessDeniedException } from "./resource_access_denied_exception";

/**
 * A exercise that may not be accessed.
 */
export class ExerciseAccessDeniedException extends ResourceAccessDeniedException {
	private readonly url: string;

	__proto__ :ResourceAccessDeniedException
	/**
	 * ExerciseAccessDeniedException constructor.
	 *
	 * @param url the url of the exercise that may not be accessed
	 */
	public constructor(url: string) {
		super(`You may not access the exercise at url ${url}.`);
		this.url = url;
		this.__proto__ = ExerciseAccessDeniedException.prototype;
	}

	/**
	 * Gets the url of the exercise that may not be accessed.
	 *
	 * @return the url
	 */
	public getExerciseUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `ExerciseAccessDeniedException{url=${this.url}}`;
	}

}

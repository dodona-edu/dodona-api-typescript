import { DodonaException } from "./dodonaexception";

/**
 * A required course color was not found.
 */
export class CourseColorNotFoundException extends DodonaException {
	private color: string;
	__proto__: DodonaException;


	/**
	 * CourseColorNotFoundException constructor.
	 *
	 * @param color the name of the color that was not found
	 */
	constructor(color: string) {
		super(`No color was found for "${color}".`);
		this.color = color;
		this.__proto__ = CourseColorNotFoundException.prototype;
	}

	/**
	 * Gets the name of the color that was not found.
	 *
	 * @return the color
	 */
	public getColor() :string {
		return this.color;
	}

}

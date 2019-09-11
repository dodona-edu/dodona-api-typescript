import { DodonaException } from "./dodonaexception";

/**
 * A required course color was not found.
 */
class CourseColorNotFoundException extends DodonaException {
	private readonly color: string;

	/**
	 * CourseColorNotFoundException constructor.
	 *
	 * @param color the name of the color that was not found
	 */
	public constructor(color: string) {
		super(`No color was found for "${color}".`);
		this.color = color;
	}

	/**
	 * Gets the name of the color that was not found.
	 *
	 * @return the color
	 */
	public getColor(): string {
		return this.color;
	}

	public toString(): string {
		return `CourseColorNotFoundException{color=${this.color}}`;
	}
}

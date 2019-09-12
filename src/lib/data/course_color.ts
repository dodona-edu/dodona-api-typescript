/**
 * The color of a course.
 */
export enum CourseColorEnum {
	BLUE_GREY = ["blue-grey", "#607D8B"] as any,
	BROWN = ["brown", "#795548"] as any,
	DEEP_PURPLE = ["deep-purple", "#673AB7"] as any,
	INDIGO = ["indigo", "#3F51B5"] as any,
	ORANGE = ["orange", "#FF5722"] as any,
	PINK = ["pink", "#E91E63"] as any,
	PURPLE = ["purple", "#9C27B0"] as any,
	RED = ["red", "#F44336"] as any,
	TEAL = ["teal", "#009688"] as any,
}

export class CourseColor {
	/**
	 * Returns list of the CourseColorEnum keys.
	 */
	public static keys() :string[]{
		return Object.keys(CourseColorEnum).filter(key => key.toUpperCase() === key);
	}

	/**
	 * Finds a CourseColor given its name.
	 *
	 * @param name the name to find
	 * @return the course color to find
	 */
	public static byName(name: string): CourseColorEnum {
		const matching: string[] = CourseColor.keys().filter(key => CourseColorEnum[key][0] === name);
        if (matching.length !== 1) {
            throw Error(`Color named ${name} not found.`);
        } else {
            return CourseColorEnum[matching[0]];
        }
	}
	private readonly color: string;
	private readonly name: string;

	/**
	 * CourseColor constructor.
	 *
	 * @param name  the name of the color
	 * @param color the hexadecimal color
	 */
	constructor(name: string, color: string) {
		this.color = color;
		this.name = name;
	}

	/**
	 * Gets the color.
	 *
	 * @return the color
	 */
	public getColor(): string {
		return this.color;
	}

	/**
	 * Gets the name of the color.
	 *
	 * @return the name
	 */
	public getName(): string {
		return this.name;
	}
}

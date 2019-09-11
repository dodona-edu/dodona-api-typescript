import { Color } from "color";

/**
 * The color of a course.
 */
export enum CourseColorEnum {
	BLUE_GREY = ["blue-grey", Color("#607D8B")] as any,
	BROWN = ["brown", Color("#795548")] as any,
	DEEP_PURPLE = ["deep-purple", Color("#673AB7")] as any,
	INDIGO = ["indigo", Color("#3F51B5")] as any,
	ORANGE = ["orange", Color("#FF5722")] as any,
	PINK = ["pink", Color("#E91E63")] as any,
	PURPLE = ["purple", Color("#9C27B0")] as any,
	RED = ["red", Color("#F44336")] as any,
	TEAL = ["teal", Color("#009688")] as any,
}

class CourseColor {

	/**
	 * Finds a CourseColor given its name.
	 *
	 * @param name the name to find
	 * @return the course color to find
	 */
	public static byName(name: string): CourseColorEnum {
        const matching: string[] = Object.keys(CourseColorEnum).filter(key => CourseColorEnum[key][0] == name);
        if (matching.length !== 1) {
            throw Error(`Color named ${name} not found.`);
        } else {
            return CourseColorEnum[matching[0]];
        }
	}
	private readonly color: Color;
	private readonly name: string;

	/**
	 * CourseColor constructor.
	 *
	 * @param name  the name of the color
	 * @param color the hexadecimal color
	 */
	constructor(name: string, color: Color) {
		this.color = color;
		this.name = name;
	}

	/**
	 * Gets the color.
	 *
	 * @return the color
	 */
	public getColor(): Color {
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

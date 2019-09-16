
/**
 * The color of a course.
 */
export enum CourseColorEnum {
	BLUE_GREY = 0,
	BROWN,
	DEEP_PURPLE,
	INDIGO,
	ORANGE,
	PINK,
	PURPLE,
	RED,
	TEAL,
}

export class CourseColor {

	private static values :string[][] = [["blue-grey", "#607D8B"], ["brown", "#795548"],
										 ["deep-purple", "#673AB7"], ["indigo", "#3F51B5"],
										 ["orange", "#FF5722"], ["pink", "#E91E63"],
										 ["purple", "#9C27B0"], ["red", "#F44336"],
										 ["teal", "#009688"]];

	/**
	 * Finds a CourseColor given its name.
	 *
	 * @param name the name to find
	 * @return the course color to find
	 */
	public static byName(name: string): CourseColor {
		const match: number = CourseColor.values.map(value => value[0]).indexOf(name);
		if (match < 0 || match > CourseColor.values.length) throw new Error(`Color named '${name}' not found.`);
        return new CourseColor(match);
	}

	private readonly color: string;
	private readonly name: string;

	/**
	 * CourseColor constructor.
	 *
	 * @param name  the name of the color
	 * @param color the hexadecimal color
	 */
	constructor(state :number) {
		if (state < 0 || state > CourseColor.values.length) {
			throw new Error(`State '${state}' out of bounds [0, ${CourseColor.values.length}]`);
		}
		this.name = CourseColor.values[state][0];
		this.color = CourseColor.values[state][1];
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

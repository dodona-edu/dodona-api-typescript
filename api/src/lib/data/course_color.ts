/**
 * The color of a course.
 */
export enum CourseColorEnum {
	BLUE_GREY = <any> ["blue-grey", "#607D8B"],
	BROWN = <any> ["brown", "#795548"],
	DEEP_PURPLE = <any> ["deep-purple", "#673AB7"],
	INDIGO = <any> ["indigo", "#3F51B5"],
	ORANGE = <any> ["orange", "#FF5722"],
	PINK = <any> ["pink", "#E91E63"],
	PURPLE = <any> ["purple", "#9C27B0"],
	RED = <any> ["red", "#F44336"],
	TEAL = <any> ["teal", "#009688"]
}

class CourseColor {	
	private readonly color :string;
	private readonly name :string;
	
	/**
	 * CourseColor constructor.
	 *
	 * @param name  the name of the color
	 * @param color the hexadecimal color
	 */
	constructor(name :string, color :string) {
		this.color = color;
		this.name = name;
	}
	
	/**
	 * Finds a CourseColor given its name.
	 *
	 * @param name the name to find
	 * @return the course color to find
	 */
	public static byName(name :string) :CourseColorEnum {
        let matching :string[] = Object.keys(CourseColorEnum).filter(key => CourseColorEnum[key][0] == name);
        if (matching.length !== 1) {
            throw Error(`Color named ${name} not found.`);
        } else {
            return CourseColorEnum[matching[0]];
        }
	}
	
	/**
	 * Gets the color.
	 *
	 * @return the color
	 */
	public getColor() :string {
		return this.color;
	}
	
	/**
	 * Gets the name of the color.
	 *
	 * @return the name
	 */
	public getName() :string {
		return this.name;
	}
}

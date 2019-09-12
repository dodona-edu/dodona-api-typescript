import {CourseColor, CourseColorEnum} from "../../lib/data/course_color";

/**
 * Tests src.lib.data.CourseColor.
 */


/**
 * Tests CourseColor.byName(String) using the color name.
 */
test("Tests CourseColor.byName(String) using the color name.", () =>{
	CourseColor.keys().forEach(key => {
		let color = CourseColorEnum[key]
		let byName = CourseColor.byName(color[0]);
		expect(byName).toBe(color);
	});
})

/**
 * Tests CourseColor.byName(String) using a non-existing color.
 */

test("Tests CourseColor.byName(String) using a non-existing color.", () =>{
	let name = "non-existing-color";
	expect(() => {
		CourseColor.byName(name);
	}).toThrowError(new Error(`Color named ${name} not found.`));
})

/**
 * Tests CourseColor#getColor().
 */
test("Tests CourseColor#getColor().", () => {
	const amount = CourseColor.keys().length;
	let colors = getColors();
	expect(colors).toBeDefined();
	expect(colors.length).toBe(amount);
})


/**
 * Tests CourseColor#getName().
 */
test("Tests CourseColor#getName().", () => {
	const amount = CourseColor.keys().length;

	const names = getColors().map(color => color.getName());
	expect(names).toBeDefined();
	names.forEach(name => expect(name).toBeDefined());
	expect(names.length).toBe(amount);
})

/**
 * Gives an list of all CourseColors.
 */
function getColors(){
	let colors = [];
	CourseColor.keys().forEach(key => {
		let tuple = CourseColorEnum[key];
		let color = new CourseColor(tuple[0], tuple[1]);
		colors.push(color);
	});
	return colors;
}
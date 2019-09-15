import {CourseColor, CourseColorEnum} from "../../lib/data/course_color";

/**
 * Tests src.lib.data.course_color.
 */


/**
 * Tests CourseColor.byName(String) using the color name.
 */
test("Tests CourseColor.byName(String) using the color name.", () =>{
	CourseColor.values.forEach((value, index) => {
		let byName = CourseColor.byName(value[0]);
		expect(byName).toBeTruthy();
		expect(byName).toStrictEqual(new CourseColor(index));
	});
})

/**
 * Tests CourseColor.byName(String) using a non-existing color.
 */

test("Tests CourseColor.byName(String) using a non-existing color.", () =>{
	let name = "non-existing-color";
	expect(() => {
		CourseColor.byName(name);
	}).toThrowError(new Error(`Color named '${name}' not found.`));
})

/**
 * Tests CourseColor#getColor().
 */
test("Tests CourseColor#getColor().", () => {
	const amount = CourseColor.values.length;
	let colors = CourseColor.values.map(val => val[0]);
	expect(colors.length).toBe(amount);
})


/**
 * Tests CourseColor#getName().
 */
test("Tests CourseColor#getName().", () => {
	const amount = CourseColor.values.length;

	const names = CourseColor.values.map((_, index) => new CourseColor(index)).map(color => color.getName());
	expect(names).toBeTruthy();
	names.forEach(name => expect(name).toBeTruthy());
	expect(names.length).toBe(amount);
})


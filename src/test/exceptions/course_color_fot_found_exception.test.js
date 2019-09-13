import { CourseColorNotFoundException } from "../../lib/exceptions/course_color_not_found_exception";
import { randomInt } from "../../lib/helperfunctions";

/**
 * Tests src.lib.exceptions.course_color_not_found_exception.
 */
/**
 * Tests CourseColorNotFoundException#getColor().
 */
test("Tests CourseColorNotFoundException#getColor().", () =>{
	const randomcharacters = randomInt().toString();
	const exception = new CourseColorNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getColor()).toBe(randomcharacters);
})

/**
 * Tests CourseColorNotFoundException#toString().
 */
test("Tests CourseColorNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new CourseColorNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
})


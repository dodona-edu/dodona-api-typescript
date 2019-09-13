import { randomInt } from "../../../lib/helperfunctions";
import { CourseNotFoundException } from "../../../lib/exceptions/notfound/course_not_found_exception";

/**
 * Tests src.lib.exceptions.notfound.course_not_found_exception.
 */
/**
 * Tests CourseNotFoundException#getCourseUrl().
 */
test("Tests CourseNotFoundException#getCourseUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new CourseNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getCourseUrl()).toBe(randomcharacters);
})

/**
 * Tests CourseNotFoundException#toString().
 */
test("Tests CourseNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new CourseNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(CourseNotFoundException.name);
	expect(exception.toString()).toContain(randomcharacters);
})
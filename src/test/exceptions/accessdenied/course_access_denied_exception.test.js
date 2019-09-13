import { randomInt } from "../../../lib/helperfunctions";
import { CourseAccessDeniedException } from "../../../lib/exceptions/accessdenied/course_access_denied_exception";

/**
 * Tests src.lib.exceptions.accessdenied.course_access_denied_exception.
 */
/**
 * Tests CourseAccessDeniedException#getCourseUrl().
 */
test("Tests CourseAccessDeniedException#getCourseUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new CourseAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getCourseUrl()).toBe(randomcharacters);
})

/**
 * Tests CourseAccessDeniedException#toString().
 */
test("Tests CourseAccessDeniedException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new CourseAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
	expect(exception.toString()).toContain(CourseAccessDeniedException.name);
})

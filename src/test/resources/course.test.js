import { randomInt } from "../../lib/helperfunctions";
import { Course } from "../../lib/resources/course"
/**
 * Tests io.github.thepieterdc.dodona.resources.course.
 */

/**
 * Tests Course.getId().
 */
test("Tests Course.getId().", () => {
	let course_id = Course.getId(`https://dodona.ugent.be/courses/${1}/series/${2}/exercises/${3}`);
	expect(course_id).toBe(1);

	const random_int = randomInt() % 10; // To get rid of exponent.
	expect(random_int).toBeDefined();
	const random_course_id = Course.getId(`https://dodona.ugent.be/courses/${random_int}/series/${2}/exercises/${3}`);
	expect(random_course_id).toBe(random_int);
})

/**
 * Tests Course.getId() using an invalid url.
 */
test("Tests Course.getId() using an invalid url.", () => {
	const course_id = Course.getId("https://invalid.url/");
	expect(course_id).toBeNull();
})
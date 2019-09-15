import { randomInt } from "../../lib/helperfunctions";
import { Exercise } from "../../lib/resources/exercise"
/**
 * Tests io.github.thepieterdc.dodona.resources.exercise.
 */

/**
 * Tests Exercise.getId().
 */
test("Tests Exercise.getId().", () => {
	let course_id = Exercise.getId(`https://dodona.ugent.be/courses/${1}/series/${2}/exercises/${3}`);
	expect(course_id).toBe(3);

	const random_int = randomInt() % 10; // To get rid of exponent.
	expect(random_int).toBeDefined();
	const random_course_id = Exercise.getId(`https://dodona.ugent.be/courses/${1}/series/${2}/exercises/${random_int}`);
	expect(random_course_id).toBe(random_int);
})

/**
 * Tests Exercise.getId() using an invalid url.
 */
test("Tests Exercise.getId() using an invalid url.", () => {
	const course_id = Exercise.getId("https://invalid.url/");
	expect(course_id).toBeNull();
})
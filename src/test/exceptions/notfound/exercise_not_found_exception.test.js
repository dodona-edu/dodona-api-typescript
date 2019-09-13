import { randomInt } from "../../../lib/helperfunctions";
import { ExerciseNotFoundException } from "../../../lib/exceptions/notfound/exercise_not_found_exception";

/**
 * Tests src.lib.exceptions.notfound.exercise_not_found_exception.
 */
/**
 * Tests ExerciseNotFoundException#getExerciseUrl().
 */
test("Tests ExerciseNotFoundException#getExerciseUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new ExerciseNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getExerciseUrl()).toBe(randomcharacters);
})

/**
 * Tests ExerciseNotFoundException#toString().
 */
test("Tests ExerciseNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new ExerciseNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(ExerciseNotFoundException.name);
	expect(exception.toString()).toContain(randomcharacters);

})
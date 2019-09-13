import { randomInt } from "../../../lib/helperfunctions";
import { ExerciseAccessDeniedException } from "../../../lib/exceptions/accessdenied/exercise_access_denied_exception";

/**
 * Tests src.lib.exceptions.accessdenied.exercise_access_denied_exception.
 */
	
/**
 * Tests ExerciseAccessDeniedException#getExerciseUrl().
 */
test("Tests ExerciseAccessDeniedException#getExerciseUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new ExerciseAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getExerciseUrl()).toBe(randomcharacters);
})

/**
 * Tests ExerciseAccessDeniedException#toString().
 */
test("Tests ExerciseAccessDeniedException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new ExerciseAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
	expect(exception.toString()).toContain(ExerciseAccessDeniedException.name);
})
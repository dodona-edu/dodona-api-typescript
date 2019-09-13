import { ExerciseStatus, ExerciseStatusEnum } from "../../lib/data/exercise_status";
/**
 * Tests src.lib.data.exercise_status.
 */

/**
 * Tests ExerciseStatus.fromValues(boolean, boolean, boolean) using the status name.
 */
test("Tests ExerciseStatus.fromValues(boolean, boolean, boolean) using the status name.", () => {
	expect(ExerciseStatusEnum.CORRECT).toBe(ExerciseStatus.fromValues(true, true, true));
	expect(ExerciseStatusEnum.INCORRECT).toBe(ExerciseStatus.fromValues(false, true, true));
})

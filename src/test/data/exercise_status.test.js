import { ExerciseStatus, ExerciseStatusEnum } from "../../lib/data/exercise_status";
/**
 * Tests src.lib.data.exercise_status.
 */
describe("Tests ExerciseStatus.", () => {
	/**
	 * Tests ExerciseStatus.fromValues(boolean, boolean, boolean) using the status name.
	 */
	test("Tests ExerciseStatus.fromValues(boolean, boolean, boolean) using the status name.", () => {
		expect(ExerciseStatusEnum.CORRECT).toBe(ExerciseStatus.fromValues(true, true, true).getState());
		expect(ExerciseStatusEnum.INCORRECT).toBe(ExerciseStatus.fromValues(false, true, true).getState());
	})

	test("Tests ExerciseStatus.getKey().", () => {
		expect(ExerciseStatus.fromValues(true, true, true).getKey()).toBe("CORRECT");
		expect(ExerciseStatus.fromValues(false, true, true).getKey()).toBe("INCORRECT");
	})

	test("Tests ExerciseStatus.getValue().", () => {
		expect(ExerciseStatus.fromValues(true, true, true).getValues()).toStrictEqual([true, true, true]);
		let values = [false, true, true];
		ExerciseStatus.fromValues(false, true, true).getValues().forEach((value, index) => expect(value ? value === values[index] : true).toBeTruthy());
	})
})

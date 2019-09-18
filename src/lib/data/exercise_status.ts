export enum ExerciseStatusEnum {
    /**
	 * The exercise is correct.
	 */
	CORRECT = 0,
	/**
	 * The exercise was solved correctly before, but afterwards another
	 * incorrect solution was made.
	 */
	HAS_BEEN_CORRECT,
	/**
	 * The exercise has not yet been solved correctly.
	 */
	INCORRECT,
	/**
	 * The exercise has not yet been attempted.
	 */
	NOT_ATTEMPTED,
}

/**
 * The status of an exercise.
 */
export class ExerciseStatus {
	/**
	 * Returns list of the CourseColorEnum keys.
	 */

	private readonly state :number;
	private static readonly values :(boolean|null)[][] = [[true, true, true], [true, true, false], [false, true, null], [null, false, null]] ;
	private static readonly keys :string[] = ["CORRECT", "HAS_BEEN_CORRECT", "INCORRECT", "NOT_ATTEMPTED"];
	
	/**
	 * Finds an ExerciseStatus given the values of the exercise.
	 *
	 * @param hasCorrectSolution value for has_correct_solution
	 * @param hasSolution        value for has_solution
	 * @param lastSolutionIsBest value for last_solution_is_best
	 * @return the matching exercise status
	 */
	public static fromValues(hasCorrectSolution: boolean, hasSolution: boolean, lastSolutionIsBest: boolean): ExerciseStatus {
		return new ExerciseStatus(hasCorrectSolution, hasSolution, lastSolutionIsBest);
	}

	public getState() :number{
		return this.state;
	}

	public getValues() :(boolean|null)[]{
		return ExerciseStatus.values[this.state];
	}

	public getKey() :string{
		return ExerciseStatus.keys[this.state];
	}

	/**
	 * ExerciseStatus constructor.
	 *
	 * @param hasCorrectSolution matching value for has_correct_solution
	 * @param hasSolution        matching value for has_solution
	 * @param lastSolutionIsBest matching value for last_solution_is_best
	 */
	constructor(hasCorrectSolution: boolean, hasSolution: boolean, lastSolutionIsBest: boolean) {
		const matching :number[] = ExerciseStatus.values.filter(value => 
															value[0] === hasCorrectSolution &&
															value[1] === hasSolution &&
															value[2] === lastSolutionIsBest,
														).map((_, index) => index);
		if (matching.length !== 1) {
			this.state = 2;
		} else {
			this.state = matching[0];
		}
	}
}

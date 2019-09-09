import { tupleTypeAnnotation } from "@babel/types";

enum ExerciseStatusEnum {
    /**
	 * The exercise is correct.
	 */
	CORRECT = <any> [true, true, true],
	/**
	 * The exercise was solved correctly before, but afterwards another
	 * incorrect solution was made.
	 */
	HAS_BEEN_CORRECT = <any> [true, true, false],
	/**
	 * The exercise has not yet been solved correctly.
	 */
	INCORRECT = <any> [false, true, null],
	/**
	 * The exercise has not yet been attempted.
	 */
	NOT_ATTEMPTED = <any> [null, false, null]
}

/**
 * The status of an exercise.
 */
export class ExerciseStatus {
	private readonly hasCorrectSolution :boolean;
	private readonly hasSolution :boolean;
	private readonly lastSolutionIsBest :boolean;
	
	/**
	 * ExerciseStatus constructor.
	 *
	 * @param hasCorrectSolution matching value for has_correct_solution
	 * @param hasSolution        matching value for has_solution
	 * @param lastSolutionIsBest matching value for last_solution_is_best
	 */
	constructor(hasCorrectSolution :boolean, hasSolution :boolean, lastSolutionIsBest :boolean) {
		this.hasCorrectSolution = hasCorrectSolution;
		this.hasSolution = hasSolution;
		this.lastSolutionIsBest = lastSolutionIsBest;
	}
	
	/**
	 * Finds an ExerciseStatus given the values of the exercise.
	 *
	 * @param hasCorrectSolution value for has_correct_solution
	 * @param hasSolution        value for has_solution
	 * @param lastSolutionIsBest value for last_solution_is_best
	 * @return the matching exercise status
	 */
	public static fromValues(hasCorrectSolution :boolean, hasSolution :boolean, lastSolutionIsBest :boolean) : ExerciseStatusEnum {
		let matching : string[] = Object.keys(ExerciseStatusEnum)
										.filter(key => 
											ExerciseStatusEnum[key][0] === hasCorrectSolution && 
											ExerciseStatusEnum[key][1] === hasSolution && 
											ExerciseStatusEnum[key][2] === lastSolutionIsBest
											);
		if (matching.length !== 1){
			return ExerciseStatusEnum.INCORRECT;
		}else {
			return ExerciseStatusEnum[matching[0]];
		}
	}
}

/**
 * The status of an exercise.
 */
export class ExerciseStatus {
	
	
	private hasCorrectSolution:  boolean;
	private hasSolution:         boolean;
    private lastSolutionIsBest:  boolean;
    
    /**
     * The exercise is correct.
     */
    static CORRECT = new ExerciseStatus(true, true, true);
    /**
     * The exercise was solved correctly before, but afterwards another
     * incorrect solution was made.
     */
    static HAS_BEEN_CORRECT = new ExerciseStatus(true, true, false);
    /**
     * The exercise has not yet been solved correctly.
     */
    static INCORRECT = new ExerciseStatus(false, true, null);
    /**
     * The exercise has not yet been attempted.
     */
    static NOT_ATTEMPTED = new ExerciseStatus(null, false, null);
	
	/**
	 * ExerciseStatus constructor.
	 *
	 * @param hasCorrectSolution matching value for has_correct_solution
	 * @param hasSolution        matching value for has_solution
	 * @param lastSolutionIsBest matching value for last_solution_is_best
	 */
	private constructor(hasCorrectSolution: boolean,
                        hasSolution: boolean,
                        lastSolutionIsBest: boolean) {
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
	public static fromValues(hasCorrectSolution: boolean,
                             hasSolution: boolean,
                             lastSolutionIsBest: boolean) : ExerciseStatus {
        
        for(let status of this.values()){
            if(status.equals(hasCorrectSolution, hasSolution, lastSolutionIsBest)){
                return status;
            }
        }
        return ExerciseStatus.INCORRECT;
    }

    equals(hasCorrectSolution: boolean,
            hasSolution: boolean,
            lastSolutionIsBest: boolean) : boolean {
        return this.hasSolution === hasSolution
         && this.hasCorrectSolution === hasCorrectSolution
         && this.lastSolutionIsBest === lastSolutionIsBest;
    }

    static values(): Array<ExerciseStatus> {
        return [ExerciseStatus.CORRECT, ExerciseStatus.HAS_BEEN_CORRECT, ExerciseStatus.INCORRECT, ExerciseStatus.NOT_ATTEMPTED];
    }
}
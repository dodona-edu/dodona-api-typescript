import { SubmissionStatusNotFoundException } from "../exceptions/submission_status_not_found_exception";

export enum SubmissionStatusEnum {
    COMPILATION_ERROR = 0,
	CORRECT,
	INTERNAL_ERROR,
	MEMORY_LIMIT_EXCEEDED,
	QUEUED,
	RUNNING,
	RUNTIME_ERROR,
	TIME_LIMIT_EXCEEDED,
	UNKNOWN,
    WRONG,
}
/**
 * The status of a submission.
 */
export class SubmissionStatus {

	public state: number;

	private static values :string[] = ["compilation error", "correct", "internal error",
									   "memory limit exceeded", "queued", "running",
									   "runtime error", "time limit exceeded", "unknown",
									   "wrong"]

	/**
	 * SubmissionStatus constructor.
	 *
	 * @param state the state of the status
	 */
	constructor(state: number) {
		if (state < 1 && state > SubmissionStatus.values.length) {
			throw new Error(`State '${state}' out of bounds [0, ${SubmissionStatus.values.length}]`)
		}
		this.state = state;
	}

	/**
	 * Finds a SubmissionStatus given its name.
	 *
	 * @param name the name to find
	 * @return the submission status to find
	 */
	public static byName(name: string): SubmissionStatus {
		const match: number = SubmissionStatus.values.indexOf(name);
		if (match >= 0 && match < SubmissionStatus.values.length) {
			return new SubmissionStatus(match);
		} else {
			throw new SubmissionStatusNotFoundException(name);
		}
	}

	/**
	 * Gets the name of the status.
	 *
	 * @return the name
	 */
	public getName(): string {
		return SubmissionStatus.values[this.state];
	}
}

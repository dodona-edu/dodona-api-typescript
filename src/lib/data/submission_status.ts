import { SubmissionStatusNotFoundException } from "../exceptions/submission_status_not_found_exception";

export enum SubmissionStatusEnum {
    COMPILATION_ERROR = "compilation error",
	CORRECT = "correct",
	INTERNAL_ERROR = "internal error",
	MEMORY_LIMIT_EXCEEDED = "memory limit exceeded",
	QUEUED = "queued",
	RUNNING = "running",
	RUNTIME_ERROR = "runtime error",
	TIME_LIMIT_EXCEEDED = "time limit exceeded",
	UNKNOWN = "unknown",
    WRONG = "wrong",
}
/**
 * The status of a submission.
 */
export class SubmissionStatus {

	public name: string;

	/**
	 * SubmissionStatus constructor.
	 *
	 * @param name the name of the status
	 */
	constructor(name: string) {
		this.name = name;
	}
	
	/**
	 * Returns list of the CourseColorEnum keys.
	 */
	public static keys() :string[]{
		return Object.keys(SubmissionStatusEnum).filter(key => key.toUpperCase() === key);
	}

	/**
	 * Finds a SubmissionStatus given its name.
	 *
	 * @param name the name to find
	 * @return the submission status to find
	 */
	public static byName(name: string): SubmissionStatusEnum {
		const matches: string[] = SubmissionStatus.keys().filter(key => (SubmissionStatusEnum[key] === name));
		if (matches.length === 1) {
			return SubmissionStatusEnum[matches[0]];
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
		return this.name;
	}
}

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
	 * Finds a SubmissionStatus given its name.
	 *
	 * @param name the name to find
	 * @return the submission status to find
	 */
	public static byName(name: string): SubmissionStatusEnum {
		const matches: string[] = Object.keys(SubmissionStatusEnum).filter(key => (SubmissionStatusEnum[key] === name));
		if (matches.length === 1) {
			return SubmissionStatusEnum[matches[0]];
		} else {
			throw new Error(`SubmissionStatus with '${name}' not found`);
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

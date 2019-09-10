/**
 * Marker class for all exceptions.
 */
export abstract class DodonaException extends Error {
	/**
	 * DodonaException constructor.
	 *
	 * @param message the exception message
	 */
	protected constructor(message: string) {
		super(message);
	}
}

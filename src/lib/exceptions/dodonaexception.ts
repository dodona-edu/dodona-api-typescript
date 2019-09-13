/**
 * Marker class for all exceptions.
 */
export abstract class DodonaException extends Error {
	__proto__: Error;

	/**
	 * DodonaException constructor.
	 *
	 * @param message the exception message
	 */
	constructor(message: string) {
		super(message);
		this.__proto__ = DodonaException.prototype;
	}
}

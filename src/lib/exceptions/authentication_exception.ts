import { DodonaException } from "./dodonaexception";
/**
 * An exception occurred because an invalid API token was used.
 */
export class AuthenticationException extends DodonaException {
	public static readonly INVALID: string = "An invalid API token was provided.";
	public static readonly MISSING: string = "No API token was provided.";

	__proto__ :DodonaException;
	/**
	 * Generates an exception stating that there was an API token provided, but
	 * it was invalid.
	 *
	 * @return the exception
	 */
	public static invalid(): AuthenticationException {
		return new AuthenticationException(AuthenticationException.INVALID);
	}

	/**
	 * Generates an exception stating that there was no API token provided.
	 *
	 * @return the exception
	 */
	public static missing(): AuthenticationException {
		return new AuthenticationException(AuthenticationException.MISSING);
	}

	/**
	 * AuthenticationException constructor.
	 *
	 * @param message the error message
	 */
	private constructor(message: string) {
		super(message);
		this.__proto__ = AuthenticationException.prototype;
	}

	public toString(): string {
		return `AuthenticationException: ${this.message}`;
	}
}

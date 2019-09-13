import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * The root can not be found. This exception should normally never be thrown.
 */
export class RootNotFoundException extends ResourceNotFoundException {
	__proto__ :ResourceNotFoundException
	
	/**
	 * RootNotFoundException constructor.
	 */
	public constructor() {
		super("The root could not be queried. You should never receive this error, please report this.");
		this.__proto__ = RootNotFoundException.prototype;
	}

	public toString(): string {
		return "RootNotFoundException{}";
	}
}

import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * The root can not be found. This exception should normally never be thrown.
 */
class RootNotFoundException extends ResourceNotFoundException {
	/**
	 * RootNotFoundException constructor.
	 */
	public constructor() {
		super("The root could not be queried. You should never receive this error, please report this.");
	}

	public toString(): string {
		return "RootNotFoundException{}";
	}
}

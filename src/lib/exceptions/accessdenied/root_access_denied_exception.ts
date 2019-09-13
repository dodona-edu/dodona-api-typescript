import { ResourceAccessDeniedException } from "./resource_access_denied_exception";

/**
 * The root may not be accessed. This exception should normally never be thrown.
 */
export class RootAccessDeniedException extends ResourceAccessDeniedException {
	__proto__ :ResourceAccessDeniedException
	
	/**
	 * RootAccessDeniedException constructor.
	 */
	public constructor() {
		super("The root could not be queried. You should never receive this error, please report this.");
		this.__proto__ = RootAccessDeniedException.prototype;
	}

	public toString(): string {
		return "RootAccessDeniedException{}";
	}

}

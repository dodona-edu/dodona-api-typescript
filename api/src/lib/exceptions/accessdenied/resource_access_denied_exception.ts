import { DodonaException } from "../dodonaexception";

/**
 * A requested resource may not be accessed.
 */
export abstract class ResourceAccessDeniedException extends DodonaException {
	/**
	 * ResourceAccessDeniedException constructor.
	 */
	constructor(message :string) {
		super(message.replace(".json", ""));
	}
	
	public abstract toString() :string;
}

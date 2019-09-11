import { DodonaException } from "../dodonaexception";
/**
 * A requested resource could not be found.
 */
export abstract class ResourceNotFoundException extends DodonaException {
	/**
	 * ResourceNotFoundException constructor.
	 */
	constructor(message: string) {
		super(message.replace(".json", ""));
	}

	public abstract toString(): string;
}

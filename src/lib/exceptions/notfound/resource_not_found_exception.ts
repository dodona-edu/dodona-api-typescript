import { DodonaException } from "../dodonaexception";
/**
 * A requested resource could not be found.
 */
export class ResourceNotFoundException extends DodonaException {
	/**
	 * ResourceNotFoundException constructor.
	 */
	constructor(message: string) {
		super(message.replace(".json", ""));
	}
}

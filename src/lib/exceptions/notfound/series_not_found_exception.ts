import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A series that can not be found.
 */
export class SeriesNotFoundException extends ResourceNotFoundException {
	private readonly url: string;


	__proto__ :ResourceNotFoundException
	/**
	 * SeriesNotFoundException constructor.
	 *
	 * @param url the url of the series that was not found
	 */
	public constructor(url: string) {
		super(`No series was found at the given url: ${url}`);
		this.url = url;
		this.__proto__ = SeriesNotFoundException.prototype;
	}

	/**
	 * Gets the url of the series that can not be found.
	 *
	 * @return the url
	 */
	public getSeriesUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `SeriesNotFoundException{url=${this.url}}`;
	}
}

import { ResourceAccessDeniedException } from "./resource_access_denied_exception";

/**
 * A series that may not be accessed.
 */
export class SeriesAccessDeniedException extends ResourceAccessDeniedException {
	private readonly url: string;
	__proto__ :ResourceAccessDeniedException;

	/**
	 * SeriesAccessDeniedException constructor.
	 *
	 * @param url the url of the series that may not be accessed
	 */
	public constructor(url: string) {
		super(`You may not access the series at url ${url}.`);
		this.url = url;
		this.__proto__ = SeriesAccessDeniedException.prototype;
	}

	/**
	 * Gets the url of the series that may not be accessed.
	 *
	 * @return the url
	 */
	public getSeriesUrl(): string {
		return this.url;
	}

	public toString(): string {
		return `SeriesAccessDeniedException{url=${this.url}}`;
	}

}

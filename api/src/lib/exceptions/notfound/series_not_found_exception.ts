import { ResourceNotFoundException } from "./resource_not_found_exception";

/**
 * A series that can not be found.
 */
class SeriesNotFoundException extends ResourceNotFoundException {
	private readonly url :string;
	
	/**
	 * SeriesNotFoundException constructor.
	 *
	 * @param url the url of the series that was not found
	 */
	public constructor(url :string) {
		super(`No series was found at the given url: ${url}`);
		this.url = url;
	}
	
	/**
	 * Gets the url of the series that can not be found.
	 *
	 * @return the url
	 */
	public getSeriesUrl() :string{
		return this.url;
	}
	
	public toString() :string {
		return `SeriesNotFoundException{url=${this.url}}`;
	}
}
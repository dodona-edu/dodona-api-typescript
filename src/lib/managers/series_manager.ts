import { AbstractManager } from "./abstract_manager";
import { Series } from "../resources/series";
import { HttpClient } from "../http/http_client";
import { SeriesAccessDeniedException } from "../exceptions/accessdenied/series_access_denied_exception";
import { SeriesNotFoundException } from "../exceptions/notfound/series_not_found_exception";
import { Course } from "../resources/course";

/**
 * Implementation of SeriesManager.
 */
export class SeriesManager extends AbstractManager<Series> {
	/**
	 * SeriesManagerImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	public constructor(host :string, http :HttpClient) {
		super(host, http, (url) => new SeriesAccessDeniedException(url), (url) => new SeriesNotFoundException(url));
	}
	
	public getAll(course :Course) :Promise<Series|Series[]> {
		return this.parse(this.get(course.getSeriesUrl()));
	}

	private parse(resp_promise : Promise<Response>) : Promise<Series|Series[]>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return JSON.parse(json, Series.reviver);
		});
	}
}

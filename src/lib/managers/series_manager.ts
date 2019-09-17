import { AbstractManager } from "./abstract_manager";
import { Series, SeriesJSON } from "../resources/series";
import { HttpClient } from "../http/http_client";
import { SeriesAccessDeniedException } from "../exceptions/accessdenied/series_access_denied_exception";
import { SeriesNotFoundException } from "../exceptions/notfound/series_not_found_exception";
import { Course } from "../resources/course";
import { Response } from "node-fetch";

/**
 * Implementation of SeriesManager.
 */
export class SeriesManager extends AbstractManager {
	/**
	 * SeriesManagerImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	public constructor(host :string, http :HttpClient) {
		super(host, http, (url) => new SeriesAccessDeniedException(url), (url) => new SeriesNotFoundException(url));
	}
	
	public getAll(course :Course) :Promise<Series[]> {
		return this.parse(this.get(course.getSeriesUrl()));
	}

	private parse(resp_promise : Promise<Response>) : Promise<Series[]>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return json.map((serie :SeriesJSON)=> Series.fromJSON(serie));
		});
	}
}

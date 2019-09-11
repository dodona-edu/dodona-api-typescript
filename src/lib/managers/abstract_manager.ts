import { HttpClient } from "../http/http_client";
import { Resource } from "../resources/resource";
import { ResourceAccessDeniedException } from "../exceptions/accessdenied/resource_access_denied_exception";
import { ResourceNotFoundException } from "../exceptions/notfound/resource_not_found_exception";

/**
 * Abstract implementation of a ResourceManager.
 *
 * @param <T> type class of the resource
 */
export abstract class AbstractManager<T extends Resource> {
	private readonly host :string;
	private readonly http :HttpClient<T>;
	// private readonly impl;

	private readonly forbidden :(string) => ResourceAccessDeniedException;
	private readonly notFound :(string) => ResourceNotFoundException;
	/**
	 * AbstractManagerImpl constructor.
	 *
	 * @param host      the host
	 * @param http      the http client
	 * @param impl      resource implementation
	 * @param forbidden 403 exception
	 * @param notFound  404 exception
	 */
	constructor(host: string, http: HttpClient<T>,
				/*Class<? extends T> impl,*/
				forbidden :(string) => ResourceAccessDeniedException,
				notFound :(string) => ResourceNotFoundException) {
		this.forbidden = forbidden;
		this.host = host;
		this.http = http;
		// this.impl = impl;
		this.notFound = notFound;
	}

	/**
	 * Gets a custom response.
	 *
	 * @param url the url to get
	 * @param cls the class of the response
	 * @param <R> the type of the response
	 * @return the resolved response
	 */
    /*get(url :string) :R as R {
		return this.http.get(url).then(json => JSON.parse)
			.forbidden(this.forbidden.apply(url))
			.notFound(this.notFound.apply(url))
			.resolve();
	}*/

	public get(url :string) :T {
		return this.get(url/*, this.impl*/);
	}

	/**
	 * Prepends the host to the given endpoint.
	 *
	 * @param endpoint the endpoint
	 * @return the complete url
	 */
	url(endpoint :string) :string {
		return this.host + endpoint;
	}
}

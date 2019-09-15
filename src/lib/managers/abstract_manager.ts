import { HttpClient } from "../http/http_client";
import { ResourceAccessDeniedException } from "../exceptions/accessdenied/resource_access_denied_exception";
import { ResourceNotFoundException } from "../exceptions/notfound/resource_not_found_exception";

/**
 * Abstract implementation of a ResourceManager.
 *
 * @param <T> type class of the resource
 */
export abstract class AbstractManager {
	private readonly host :string;
	private readonly http :HttpClient;

	private readonly forbidden :(a: string) => ResourceAccessDeniedException;
	private readonly notFound :(a: string) => ResourceNotFoundException;
	/**
	 * AbstractManagerImpl constructor.
	 *
	 * @param host      the host
	 * @param http      the http client
	 * @param impl      resource implementation
	 * @param forbidden 403 exception
	 * @param notFound  404 exception
	 */
	constructor(host: string, http: HttpClient,
				forbidden :(a :string) => ResourceAccessDeniedException,
				notFound :(a :string) => ResourceNotFoundException) {
		this.forbidden = forbidden;
		this.host = host;
		this.http = http;
		this.notFound = notFound;
	}

	public get(url :string) :Promise<Response> {
		return this.http.setForbidden(this.forbidden(url)).setNotFound(this.notFound(url)).get(url);
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

	post(url :string, request :any){
		return this.http.post(url, request);
	}
}

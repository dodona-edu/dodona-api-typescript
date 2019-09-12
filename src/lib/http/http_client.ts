import { AuthenticationException } from "../exceptions/authentication_exception";
import { HttpResponse } from "./http_response";

/**
 * Implementation of a HttpClient.
 */
export class HttpClient {
	private static readonly ACCEPT_HEADER: string = "Accept";
	private static readonly ACCEPT_VALUE: string = "application/json";
	private static readonly AUTHORIZATION_HEADER: string = "Authorization";
	private static readonly CONTENT_TYPE_HEADER: string = "Content-Type";
	private static readonly CONTENT_TYPE_VALUE: string = "application/json";
	private static readonly USER_AGENT_HEADER: string = "User-Agent";

	private authentication: string = null;

	private userAgent: string = null;

	// private readonly mapper :ObjectMapper;

	/**
	 * HttpClientImpl constructor.
	 *
	 * @param mapper object mapper
	 */
	public constructor(/* mapper :ObjectMapper */) {
		// this.mapper = mapper;
	}

	public authenticate(apiToken: string): HttpClient {
		this.authentication = apiToken;
		return this;
	}

	public get(url: string): Promise<Response> {
		return fetch(url, {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, cors, *same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
        	},
        	// redirect: 'follow', // manual, *follow, error
        	// referrer: 'no-referrer', // no-referrer, *client
        	// body: JSON.stringify(data), // body data type must match "Content-Type" header

		}).then(resp => this.handleresp(resp));
	}

	public  post(url: string, body: any): Promise<Response> {
		return fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, cors, *same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: "same-origin", // include, *same-origin, omit
			headers: {
				"Content-Type": "application/json",
				// 'Content-Type': 'application/x-www-form-urlencoded',
        	},
        	// redirect: 'follow', // manual, *follow, error
        	// referrer: 'no-referrer', // no-referrer, *client
        	// body: JSON.stringify(data), // body data type must match "Content-Type" header

		}).then(resp => this.handleresp(resp));
}

	public setUserAgent(userAgent: string): HttpClient {
		this.userAgent = userAgent;
		return this;
	}

	/**
	 * Performs a HTTP request to the given url.
	 *
	 * @param url       the url
	 * @return the response parsed as T
	 */
	private handleresp(response: Response): Response{
		try {
			if (response.status === 401) {
				if (this.authentication) {
					throw AuthenticationException.invalid();
				} else {
					throw AuthenticationException.missing();
				}
			}

			if (response.status == 403) {
				throw HttpResponse.forbidden();
			}

			if (response.status == 404) {
				throw HttpResponse.notFound();
			}

			return response;
		} catch (error) {
			throw new Error(error);
		}
	}
}

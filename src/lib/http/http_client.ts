import { AuthenticationException } from "../exceptions/authentication_exception";
import { ResourceAccessDeniedException } from "../exceptions/accessdenied/resource_access_denied_exception";
import { ResourceNotFoundException } from "../exceptions/notfound/resource_not_found_exception";
const fetch = require("node-fetch");

/**
 * Implementation of a HttpClient.
 */
export class HttpClient {
	private readonly CONTENT_TYPE_VALUE: string = "application/json";

	private authentication :string = "";

	private userAgent :string = "";

	private forbidden :ResourceAccessDeniedException = new ResourceAccessDeniedException("Access denied for a resource.");

	private notfound :ResourceNotFoundException = new ResourceNotFoundException("Access denied for a resource.");

	/**
	 * HttpClientImpl constructor.
	 *
	 * @param mapper object mapper
	 */
	public constructor() {
	}

	public setForbidden(forbidden :ResourceAccessDeniedException) :this{
		this.forbidden = forbidden;
		return this;
	}

	public setNotFound(notfound :ResourceNotFoundException) :this{
		this.notfound = notfound;
		return this;
	}

	public authenticate(apiToken: string): HttpClient {
		this.authentication = apiToken;
		return this;
	}

	public async get(url: string): Promise<Response> {
		let resp = await fetch(url, {
			method: "GET",
			credentials: "same-origin",
			headers: {
				"Accept": this.CONTENT_TYPE_VALUE,
				"User-Agent": this.userAgent,
				"Authorization": this.authentication
        	},
		})
		return this.handleresp(resp);
	}

	public async post(url: string, body: string): Promise<Response> {
		let resp = await fetch(url, {
			method: "post",
			headers: {
				"Content-type": this.CONTENT_TYPE_VALUE,
				"User-Agent": this.userAgent,
				"Authorization": this.authentication
        	},
        	body: body, // body data type must match "Content-Type" header

		});
		this.handleresp(resp);
		return resp;
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
				throw this.forbidden;
			}

			if (response.status == 404) {
				throw this.notfound;
			}

			return response;
		} catch (error) {
			throw new Error(error);
		}
	}
}

import { AuthenticationException } from "../exceptions/authentication_exception";

/**
 * Implementation of a HttpResponse.
 */
export class HttpResponse<T> {

	/**
	 * Generates a forbidden HTTP/403 response.
	 *
	 * @param <T> type class of the response
	 * @return response
	 */
	public static forbidden(): HttpResponse<(any) => Error> {
		return new HttpResponse(r => {
			throw r.forbidden;
		});
	}

	/**
	 * Generates a successful HTTP response.
	 *
	 * @param <T>   type class of the response
	 * @param value the response value
	 * @return response
	 */
	public static of(value: any): HttpResponse<(any) => any> {
		return new HttpResponse(r => value);
	}

	/**
	 * Generates a not found HTTP/404 response.
	 *
	 * @param <T> type class of the response
	 * @return response
	 */
	public static notFound(): HttpResponse<(any) => Error> {
		return new HttpResponse(r => {
			throw this.notFound;
		});
	}

	/**
	 * Generates an unauthorized HTTP/401 response.
	 *
	 * @param <T> type class of the response
	 * @param ex  the authentication exception to throw
	 * @return response
	 */
	public static unauthorized(ex: AuthenticationException): HttpResponse<(any) => AuthenticationException> {
		return new HttpResponse(r => {
			throw ex;
		});
	}
	private forbidden: Error;
	private notFound: Error;

	private readonly resolver: (HttpResponse) => T;

	/**
	 * HttpResponseImpl constructor.
	 *
	 * @param resolver the value resolver
	 */
	private constructor(resolver: (HttpResponse) => T) {
		this.resolver = resolver;
		this.forbidden = new Error("Access denied.");
		this.notFound = new Error("Not found.");
	}

	public setForbidden(exception: Error): HttpResponse<T> {
		this.forbidden = exception;
		return this;
	}

	public setNotFound(exception: Error): this {
		this.notFound = exception;
		return this;
	}

	public resolve(): T {
		return this.resolver.apply(this);
	}
}

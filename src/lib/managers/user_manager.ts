import { AbstractManager } from "./abstract_manager";
import { User } from "../resources/user";
import { HttpClient } from "../http/http_client";
import { UserAccessDeniedException } from "../exceptions/accessdenied/user_access_denied_exception";
import { UserNotFoundException } from "../exceptions/notfound/user_not_found_exception";

/**
 * Implementation of UserManager.
 */
export class UserManager extends AbstractManager {	
	/**
	 * UserManagerImpl constructor.
	 *
	 * @param host the host
	 * @param http the http client
	 */
	public constructor(host :string, http :HttpClient) {
		super(host, http, (url) => new UserAccessDeniedException(url), (url) => new UserNotFoundException(url));
	}
	
	public getById(id :number) :Promise<User> {
		return this.parse(this.get(this.url(`/users/${id}`)));
	}

	private parse(resp_promise : Promise<Response>) : Promise<User>{
		return resp_promise.then( resp => {
			return resp.json();
		}).then(json => {
			return JSON.parse(json, User.reviver);
		});
	}
}

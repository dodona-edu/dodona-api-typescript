import { HttpClient } from "./http/http_client";
import { DodonaClient } from "./dodona_client";

/**
 * Implementation of DodonaBuilder.
 */
class DodonaBuilder {
	private apiToken :string = "";
	private host :string = "https://dodona.ugent.be";
	private http :HttpClient;
	private userAgent :string = `DodonaApi/${require("../../package.json").version}`;
	
	/**
	 * DodonaBuilderImpl constructor.
	 */
	public constructor() {
		this.http = new HttpClient();
	}
	
	public authenticate(token :string) :DodonaBuilder {
		this.apiToken = token;
		return this;
	}
	
	public build() :Promise<DodonaClient> {
		return DodonaClient.getDodonaClient(this.host, this.http.authenticate(this.apiToken).setUserAgent(this.userAgent));
	}
	
	public setHost(url :string) :DodonaBuilder {
		this.host = url;
		return this;
	}
	
	public setHttpClient(http :HttpClient) :DodonaBuilder {
		this.http = http;
		return this;
	}
	
	public setUserAgent(userAgent :string) :DodonaBuilder {
		this.userAgent = userAgent;
		return this;
	}
}

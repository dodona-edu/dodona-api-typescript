import { HttpClient } from "../../lib/http/http_client"
import { UserManager } from "../../lib/managers/user_manager";
import { User } from "../../lib/resources/user";

jest.mock('node-fetch');

import fetch from 'node-fetch';

const {Response} = jest.requireActual('node-fetch');

describe("Tests UserManager.", () => {
	let client = new HttpClient().authenticate("Q9PS_BpiwUBNcCdGTv_6MRFb_ZZ_f5nz_DFo0rubbhw");
	let json = {"id":199,"username":"emile_ziemann","first_name":"Wilbur","last_name":"Barton","email":"wilbur.barton.emile_ziemann@ugent.be","permission":"student","time_zone":"Brussels","lang":"nl","url":"http://localhost:3000/nl/users/199.json","submissions":"http://localhost:3000/nl/users/199/submissions.json","submission_count":3,"correct_exercises":3,"subscribed_courses":[{"id":5,"name":"Closed Test Course","teacher":"Graaf van Rommelgem","color":"deep-purple","year":"2017-2018","visibility":"hidden","registration":"closed","created_at":"2019-09-13T09:29:22.000+02:00","updated_at":"2019-09-13T09:29:22.000+02:00","url":"http://localhost:3000/nl/courses/5.json","series":"http://localhost:3000/nl/courses/5/series.json"}]};
	let user_manager = new UserManager("http://localhost:3000", client);

	it("Test UserManager.getById(:number).", async () => {
		fetch.mockResolvedValue(new Response(JSON.stringify(json), {status: 200}));// {json: JSON.stringify(json), status: 200}
		let user = await user_manager.getById(199);
		expect(user).toBeTruthy();
		expect(user).toStrictEqual(User.fromJSON(json));
	})
})
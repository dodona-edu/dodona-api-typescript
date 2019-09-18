jest.mock('node-fetch');

import fetch from 'node-fetch';
import { DodonaClient } from "../lib/dodona_client"
import { DodonaBuilder } from "../lib/dodona_builder";
import { User } from "../lib/resources/user";
import { HttpClient } from '../lib/http/http_client';

const {Response} = jest.requireActual('node-fetch');

describe("DododnaBuilder tests:", () => {

    test("Test DodonaBuilder.setHost(:string).", () => {
        let builder = new DodonaBuilder();
        expect(builder).toBeTruthy();
        expect(builder.host).toBe("https://dodona.ugent.be");
        expect(builder.setHost("http://localhost:3000").host).toBe("http://localhost:3000");
    })


    test("Test DodonaBuilder.setHost(:string).", () => {
        let builder = new DodonaBuilder();
        expect(builder).toBeTruthy();
        expect(builder.userAgent).toBe(`DodonaApi/${require("../../package.json").version}`);
        expect(builder.setUserAgent("Other Agent").userAgent).toBe("Other Agent");
    })

    test("Test DodonaBuilder.setHost(:string).", () => {
        let builder = new DodonaBuilder();
        expect(builder).toBeTruthy();
        expect(builder.http).toBeDefined();
        let expected_httpclient = new HttpClient().authenticate("Weird");
        expect(builder.setHttpClient(expected_httpclient).http).toStrictEqual(expected_httpclient);
    })
    
    it("Object from DodonaBuilder.build() of should be equals to DodonaClient constructor object.", async () => {
        let token = "Q9PS_BpiwUBNcCdGTv_6MRFb_ZZ_f5nz_DFo0rubbhw";
        let user_json = {"id":199,"username":"emile_ziemann","first_name":"Wilbur","last_name":"Barton","email":"wilbur.barton.emile_ziemann@ugent.be","permission":"student","time_zone":"Brussels","lang":"nl","url":"http://localhost:3000/nl/users/199.json","submissions":"http://localhost:3000/nl/users/199/submissions.json","submission_count":3,"correct_exercises":3,"subscribed_courses":[{"id":5,"name":"Closed Test Course","teacher":"Graaf van Rommelgem","color":"deep-purple","year":"2017-2018","visibility":"hidden","registration":"closed","created_at":"2019-09-13T09:29:22.000+02:00","updated_at":"2019-09-13T09:29:22.000+02:00","url":"http://localhost:3000/nl/courses/5.json","series":"http://localhost:3000/nl/courses/5/series.json"}]};
        fetch.mockResolvedValue(new Response(JSON.stringify(user_json), {status: 200}));
        let client = await new DodonaBuilder().setHost("http://localhost:3000").authenticate(token).build();
        let user = client.getMe();
        expect(user).toStrictEqual(User.fromJSON(user_json));
        let userAgent = `DodonaApi/${require("../../package.json").version}`;
        let expected_client = new DodonaClient("http://localhost:3000", new HttpClient().authenticate(token).setUserAgent(userAgent), user);
        expect(client).toBeDefined();
        expect(client.Equals(expected_client)).toBeTruthy();
    })
})
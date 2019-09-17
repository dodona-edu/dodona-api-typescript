jest.mock('node-fetch');

import fetch from 'node-fetch';
import { PartialSubmission } from "../../lib/resources/partial_submission";
import { CourseNotFoundException } from "../../lib/exceptions/notfound/course_not_found_exception";
import { HttpClient } from "../../lib/http/http_client"
import { CourseManager } from "../../lib/managers/course_manager";
import { Course } from "../../lib/resources/course";

const {Response} = jest.requireActual('node-fetch');

describe("Tests UserManager.", () => {
	let client = new HttpClient().authenticate("Q9PS_BpiwUBNcCdGTv_6MRFb_ZZ_f5nz_DFo0rubbhw");
	let json = {"id":5,"name":"Closed Test Course","teacher":"Graaf van Rommelgem","color":"deep-purple","year":"2017-2018","visibility":"hidden","registration":"closed","created_at":"2019-09-13T09:29:22.000+02:00","updated_at":"2019-09-13T09:29:22.000+02:00","url":"http://localhost:3000/nl/courses/5.json","series":"http://localhost:3000/nl/courses/5/series.json"};
	let course_manager = new CourseManager("http://localhost:3000", client);

	it("Test CourseManager.getCourse(:number).", async () => {
		fetch.mockResolvedValue(new Response(JSON.stringify(json), {status: 200}));// {json: JSON.stringify(json), status: 200}
		let course = await course_manager.getCourse(json.id);
		expect(course).toBeTruthy();
		expect(course).toStrictEqual(Course.fromJSON(json));
	})

	it("Test CourseManager.getPartialSubmissionCourse(:number).", async () => {
		let partialsub_json = {"created_at":"2019-09-13T09:30:20.000+02:00","status":"correct","summary":null,"accepted":true,"id":1547,"url":"http://localhost:3000/nl/submissions/1547.json","user":"http://localhost:3000/nl/users/199.json","exercise":"http://localhost:3000/nl/exercises/1677102205.json","course":"http://localhost:3000/nl/courses/5.json"};
		fetch.mockResolvedValue(new Response(JSON.stringify(json), {status: 200}));// {json: JSON.stringify(json), status: 200}
		let course = await course_manager.getPartialSubmissionCourse(PartialSubmission.fromJSON(partialsub_json));
		expect(course).toBeTruthy();
		expect(course).toStrictEqual(Course.fromJSON(json));
	})
})
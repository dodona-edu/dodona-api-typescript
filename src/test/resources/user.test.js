import { User } from "../../lib/resources/user";
import { Course } from "../../lib/resources/course";
describe("Test User.", () => {
    let json = {"id":581,"username":"llionaki","first_name":"Lucianos","last_name":"Lionakis","email":"lucianos.lionakis@ugent.be","permission":"student","time_zone":"Brussels","lang":"nl","url":"https://naos.ugent.be/nl/users/581.json","submissions":"https://naos.ugent.be/nl/users/581/submissions.json","submission_count":639,"correct_exercises":78,"subscribed_courses":[{"id":1,"name":"Programmeren","teacher":"","color":"blue-grey","year":"2016-2017","visibility":"visible_for_all","registration":"open_for_all","created_at":"2016-09-23T11:45:01.000+02:00","updated_at":"2018-10-22T15:32:03.000+02:00","url":"https://naos.ugent.be/nl/courses/1.json","series":"https://naos.ugent.be/nl/courses/1/series.json"}]};
    let user = new User(
        json.correct_exercises,
        json.first_name,
        json.id,
        json.last_name,
        json.submission_count,
        json.submissions,
        json.subscribed_courses.map(course => Course.fromJSON(course)),
        json.url
    );


    test("Test User.compareTo(:User).", () => {
        let other_json = {"id":581,"username":"Anonymous","first_name":"An","last_name":"Ony","email":"an.ony@ugent.be","permission":"student","time_zone":"Brussels","lang":"nl","url":"https://naos.ugent.be/nl/users/581.json","submissions":"https://naos.ugent.be/nl/users/581/submissions.json","submission_count":639,"correct_exercises":78,"subscribed_courses":[{"id":1,"name":"Programmeren","teacher":"","color":"blue-grey","year":"2016-2017","visibility":"visible_for_all","registration":"open_for_all","created_at":"2016-09-23T11:45:01.000+02:00","updated_at":"2018-10-22T15:32:03.000+02:00","url":"https://naos.ugent.be/nl/courses/1.json","series":"https://naos.ugent.be/nl/courses/1/series.json"}]};
        let other_user = new User(
            other_json.correct_exercises,
            other_json.first_name,
            other_json.id,
            other_json.last_name,
            other_json.submission_count,
            other_json.submissions,
            other_json.subscribed_courses.map(course => Course.fromJSON(course)),
            other_json.url
        );
        expect(user.compareTo(other_user)).toBe(-1);
    })

    test("Test User.getCorrectExercises().", () => {
        expect(user.getCorrectExercises()).toBe(json.correct_exercises);
    })

    test("Test User.getFirstName().", () => {
        expect(user.getFirstName()).toBe(json.first_name);
    })

    test("Test User.getId().", () => {
        expect(user.getId()).toBe(json.id);
    })

    test("Test User.getLastName().", () => {
        expect(user.getLastName()).toBe(json.last_name);
    })

    test("Test User.getSubmissionCount().", () => {
        expect(user.getSubmissionCount()).toBe(json.submission_count);
    })

    test("Test User.getSubmissionsUrl().", () => {
        expect(user.getSubmissionsUrl()).toBe(json.submissions);
    })

    test("Test User.getUrl().", () => {
        expect(user.getUrl()).toBe("https://naos.ugent.be/nl/users/581");
    })

    test("Test User.toString().", () => {
        expect(user.toString()).toBe(`User{id=${json.id}, firstName=${json.first_name}, lastName=${json.last_name}}`);
    })

    test("Test User.fromJSON(:UserJSON).", () => {
        expect(User.fromJSON(json)).toStrictEqual(user);
    })

    test("Test User.fromJSON(:string).", () => {
        expect(User.fromJSON(JSON.stringify(json))).toStrictEqual(user);
    })

})
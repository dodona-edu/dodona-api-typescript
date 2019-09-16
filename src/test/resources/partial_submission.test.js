import { PartialSubmission } from "../../lib/resources/partial_submission"
import { SubmissionStatus } from "../../lib/data/submission_status";

/** 
 * Tests src.lib.resources.partial_submission
*/
describe("Tests PartialSubmission", () => {
    let json = {"created_at":"2019-09-16T11:18:18.000+02:00","status":"memory limit exceeded","summary":"Geheugenlimiet overschreden","accepted":false,"id":980296,"url":"https://naos.ugent.be/nl/submissions/980296.json","user":"https://naos.ugent.be/nl/users/581.json","exercise":"https://naos.ugent.be/nl/exercises/338560084.json","course":"https://naos.ugent.be/nl/courses/1.json"};
    let partial_submission = new PartialSubmission(json.accepted,
                                                   json.course,
                                                   new Date(json.created_at),
                                                   json.exercise,
                                                   json.id,
                                                   SubmissionStatus.byName(json.status),
                                                   json.summary,
                                                   json.url
                                                   );
    
    test("Test PartialSubmission.getCourseUrl().", () => {
        expect(partial_submission.getCourseUrl()).toBe(json.course);
    })

    test("Test PartialSubmission.getCreatedAt().", () => {
        expect(partial_submission.getCreatedAt()).toStrictEqual(new Date(json.created_at));
    })
    
    test("Test PartialSubmission.getExerciseUrl().", () => {
        expect(partial_submission.getExerciseUrl()).toBe(json.exercise);
    })
    
    test("Test PartialSubmission.getId().", () => {
        expect(partial_submission.getId()).toBe(json.id);
    })
    
    test("Test PartialSubmission.getStatus().", () => {
        expect(partial_submission.getStatus()).toStrictEqual(SubmissionStatus.byName(json.status));
    })

    test("Test PartialSubmission.getSummary().", () => {
        expect(partial_submission.getSummary()).toBe(json.summary);
    })

    test("Test PartialSubmission.getUrl().", () => {
        expect(partial_submission.getUrl()).toBe("https://naos.ugent.be/nl/submissions/980296");
    })

    test("Test PartialSubmission.isAccepted().", () => {
        expect(partial_submission.isAccepted()).toBe(json.accepted);
    })

    test("Test PartialSubmission.toString().", () => {
        expect(partial_submission.toString()).toBe(`Submission{id=${json.id}, status=${json.status}}`);
    })

    test("Test PartialSubmission.fromJSON(:PartialSubmissionJSON).", () => {
        expect(PartialSubmission.fromJSON(json)).toStrictEqual(partial_submission);
    })

    test("Test PartialSubmission.fromJSON(:string).", () => {
        expect(PartialSubmission.fromJSON(JSON.stringify(json))).toStrictEqual(partial_submission);
    })
})
import { Submission } from "../../lib/resources/submission";
import { SubmissionStatus } from "../../lib/data/submission_status";

describe("Tests Submission.", () => {
    let json = {"created_at":"2019-09-16T11:18:18.000+02:00","status":"memory limit exceeded","summary":"Geheugenlimiet overschreden","accepted":false,"id":980296,"url":"https://naos.ugent.be/nl/submissions/980296.json","user":"https://naos.ugent.be/nl/users/581.json","exercise":"https://naos.ugent.be/nl/exercises/338560084.json","course":"https://naos.ugent.be/nl/courses/1.json","code":"def delen(kaarten):\n\tkaarten = list(kaarten)\n\tomdraaien = True\n\n\tvolgorde = []\n\twhile kaarten:\n\t\t(volgorde if omdraaien else kaarten).append(kaarten.pop(0))\n\n\t\t# alterneren tussen twee acties\n\t\tomdraaien = not omdraaien\n\n\t# volgorde waarin kaarten omgedraaid werden teruggeven\n\treturn volgorde\n\ndef polka(kaarten):\n\tvolgorde = [None] * len(kaarten)\n\n\tindex = -2\n\tfor kaart in kaarten:\n\t\tfor _ in range(2):\n\t\t\tindex += 1\n\t\t\twhile volgorde[index % len(kaarten)]:\n\t\t\t\tindex += 1\n\n\t\t\tvolgorde[index % len(kaarten)] = kaart\n\treturn volgorde\n\nif __name__ == '__main__':\n\timport doctest\n\tdoctest.testmod()","result":"{\"accepted\":false,\"status\":\"memory limit exceeded\",\"description\":\"Geheugenlimiet overschreden\",\"messages\":[]}"};
    let submission = new Submission(json.accepted,
                                    json.code,
                                    json.course,
                                    new Date(json.created_at),
                                    json.exercise,
                                    json.id,
                                    SubmissionStatus.byName(json.status),
                                    json.summary,
                                    json.url
                                    );
    test("Test Submission.compareTo(:Submission).", () => {
        let other_json = {"created_at":"2017-01-24T20:45:05.000+01:00","status":"runtime error","summary":"uitvoeringsfout","accepted":false,"id":587102,"url":"https://naos.ugent.be/nl/submissions/587102.json","user":"https://naos.ugent.be/nl/users/581.json","exercise":"https://naos.ugent.be/nl/exercises/19996627.json","code":"pseudo code", "result":"{\"accepted\":false,\"status\":\"memory limit exceeded\",\"description\":\"Geheugenlimiet overschreden\",\"messages\":[]}"};
        let other_submission = new Submission(other_json.accepted,
                                              other_json.code,
                                              other_json.course,
                                              new Date(other_json.created_at),
                                              other_json.exercise,
                                              other_json.id,
                                              SubmissionStatus.byName(other_json.status),
                                              other_json.summary,
                                              other_json.url
                                              );
        expect(submission.compareTo(other_submission)).toBe(1);
    })

    test("Test Submission.getCode().", () => {
        expect(submission.getCode()).toBe(json.code);
    })

    test("Test Submission.getCourseUrl().", () => {
        expect(submission.getCourseUrl()).toBe(json.course);
    })
    
    test("Test Submission.getExerciseUrl().", () => {
        expect(submission.getExerciseUrl()).toBe(json.exercise);
    })
    
    test("Test Submission.getId().", () => {
        expect(submission.getId()).toBe(json.id);
    })

    test("Test Submission.getStatus().", () => {
        expect(submission.getStatus()).toStrictEqual(SubmissionStatus.byName(json.status));
    })
    
    test("Test Submission.getSummary().", () => {
        expect(submission.getSummary()).toBe(json.summary);
    })

    test("Test Submission.getUrl().", () => {
        expect(submission.getUrl()).toBe("https://naos.ugent.be/nl/submissions/980296");
    })

    test("Test Submission.isAccepted().", () => {
        expect(submission.isAccepted()).toBe(json.accepted);
    })

    test("Test Submission.toString().", () => {
        expect(submission.toString()).toBe(`Submission{${json.id}, ${json.status}}`);
    })

    test("Test Submission.fromJSON(:SubmissionJSON).", () => {
        expect(Submission.fromJSON(json)).toStrictEqual(submission);
    })

    test("Test Submission.fromJSON(:string).", () => {
        expect(Submission.fromJSON(JSON.stringify(json))).toStrictEqual(submission);
    })
})
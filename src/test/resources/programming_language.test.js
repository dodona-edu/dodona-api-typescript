import { ProgrammingLanguage } from "../../lib/resources/programming_language"

/**
 * Tests io.github.thepieterdc.dodona.resources.programming_language.
 */


describe("ProgrammingLanguage tests", () => {
    let json = ProgrammingLanguage.fromJson({"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"});
    let test_programming_language = new ProgrammingLanguage(json.id, json.name, json.extension);

	/**
	 * Tests ProgrammingLanguage.fromJSON() using a string.
	 */
    test("Tests ProgrammingLanguage.fromJSON() using a string.", () => {
        let programming_language = ProgrammingLanguage.fromJson('{"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"}');
        expect(programming_language).toStrictEqual(test_programming_language);
    })

    /**
	 * Tests ProgrammingLanguage.getId().
	 */
    test("Tests ProgrammingLanguage.getId() using a string.", () => {
        expect(test_programming_language.getId()).toBe(json.id);
    })

    /**
	 * Tests ProgrammingLanguage.getId().
	 */
    test("Tests ProgrammingLanguage.getId() using a string.", () => {
        expect(test_programming_language.getUrl()).toBe(`https://dodona.ugent.be/en/programming_languages/${json.id}.json`);
    })

    /**
	 * Tests ProgrammingLanguage.getId().
	 */
    test("Tests ProgrammingLanguage.getId() using a string.", () => {
        expect(test_programming_language.toString()).toBe(`ProgrammingLanguage{id=${json.id}, name=${json.name}}`);
    })

})

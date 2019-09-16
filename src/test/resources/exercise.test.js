import { randomInt } from "../../lib/helperfunctions";
import { Exercise } from "../../lib/resources/exercise"
import { ProgrammingLanguage } from "../../lib/resources/programming_language";
import { ExerciseStatus } from "../../lib/data/exercise_status";
/**
 * Tests io.github.thepieterdc.dodona.resources.exercise.
 */


describe("Exercise tests", () => {
	let json = {"id":338560084,"name":"Polka Dot","description_format":"html","boilerplate":"Html text","programming_language":{"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":false,"description":"Description","url":"https://naos.ugent.be/nl/courses/1/series/278/exercises/338560084.json"};
	let status = ExerciseStatus.fromValues(json.has_correct_solution, json.has_solution, json.last_solution_is_best);
	let programming_language = ProgrammingLanguage.fromJson({"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"});
	let exercise = new Exercise("Html text",
							    "Description",
							    "html",
							    json.has_correct_solution,
							    json.has_solution,
							    338560084,
							    json.last_solution_is_best,
							    "Polka Dot",
							    programming_language,
							    "https://naos.ugent.be/nl/courses/1/series/278/exercises/338560084.json"
							    );
	/**
	 * Tests Exercise.getId().
	 */
	test("Tests Exercise.getId().", () => {
		let  exercise_id= Exercise.getId(`https://dodona.ugent.be/courses/${1}/series/${2}/exercises/${3}`);
		expect(exercise_id).toBe(3);

		const random_int = randomInt() % 10; // To get rid of exponent.
		expect(random_int).toBeDefined();
		const random_exercise_id = Exercise.getId(`https://dodona.ugent.be/courses/${1}/series/${2}/exercises/${random_int}`);
		expect(random_exercise_id).toBe(random_int);
	})

	/**
	 * Tests Exercise.getId() using an invalid url.
	 */
	test("Tests Exercise.getId() using an invalid url.", () => {
		const exercise_id = Exercise.getId("https://invalid.url/");
		expect(exercise_id).toBeNull();
	})

	/**
	 * Tests Exercise.compareTo().
	 */
	test("Tests Exercise.compareTo().", () => {
		let other_exercise = new Exercise("Html text",
								          "Description",
								          "html",
								          false,
								          true,
								          338560084,
								          true,
								          "A Dot",
								          ProgrammingLanguage.fromJson({"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"}),
								          "https://naos.ugent.be/nl/courses/1/series/278/exercises/338560084.json"
								          );
		expect(other_exercise).toBeTruthy();
		expect(exercise.compareTo(other_exercise)).toBe(1);
	})

	
	/**
	 * Tests Exercise.getBoilerplate().
	 */
	test("Tests Exercise.getBoilerplate().", () => {
		expect(exercise.getBoilerplate()).toBe("Html text");
	})


	/**
	 * Tests Exercise.getDescription().
	 */
	test("Tests Exercise.getDescription().", () => {
		expect(exercise.getDescription()).toBe(json.description);
	})
	
	/**
	 * Tests Exercise.getDescriptionFormat().
	 */
	test("Tests Exercise.getDescriptionFormat().", () => {
		expect(exercise.getDescriptionFormat()).toBe(json.description_format);
	})
	
	/**
	 * Tests Exercise.hasCorrectSolution().
	 */
	test("Tests Exercise.hasCorrectSolution().", () => {
		expect(exercise.hasCorrectSolution()).toBe(json.has_correct_solution);
	})

	/**
	 * Tests Exercise.hasSolution()
	 */
	test("Tests Exercise.hasSolution().", () => {
		expect(exercise.hasSolution()).toBe(json.has_solution);
	})

	/**
	 * Tests Exercise.getId().
	 */
	test("Tests Exercise.getId().", () => {
		expect(exercise.getId()).toBe(338560084);
	})


	/**
	 * Tests Exercise.getName()
	 */
	test("Tests Exercise.getName().", () => {
		expect(exercise.getName()).toBe("Polka Dot");
	})

	/**
	 * Tests Exercise.getProgrammingLanguage().
	 */
	test("Tests Exercise.getProgrammingLanguage().", () => {
		expect(exercise.getProgrammingLanguage()).toStrictEqual(ProgrammingLanguage.fromJson({"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"}));
	})

	/**
	 * Tests Exercise.getStatus().
	 */
	test("Tests Exercise.getStatus().", () => {
		expect(exercise.getStatus()).toStrictEqual(status);
	})

	/**
	 * Tests Exercise.getUrl().
	 */
	test("Tests Exercise.getUrl().", () => {
		expect(exercise.getUrl()).toBe("https://naos.ugent.be/nl/courses/1/series/278/exercises/338560084");
	})

	/**
	 * Tests Exercise.lastSolutionIsBest().
	 */
	test("Tests Exercise.lastSolutionIsBest().", () => {
		expect(exercise.lastSolutionIsBest()).toBe(json.last_solution_is_best);
	})

	/**
	 * Tests Exercise.toString().
	 */
	test("Tests Exercise.toString().", () => {
		expect(exercise.toString()).toBe(`Exercise{id=${json.id}, name=${json.name}, status=${status}}`);
	})
	
	/**
	 * Tests Exercise.fromJSON().
	 */
	test("Tests Exercise.fromJSON().", () => {
		let exercise_fromJSON = Exercise.fromJSON(json);
		expect(exercise_fromJSON).toStrictEqual(exercise);
	})

	/**
	 * Tests Exercise.fromJSON().
	 */
	test("Tests Exercise.fromJSON().", () => {
		let json_null_boilerplate = {"id":338560084,"name":"Polka Dot","description_format":"html","boilerplate":null,"programming_language":{"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":false,"description":"Description","url":"https://naos.ugent.be/nl/courses/1/series/278/exercises/338560084.json"};
		let json_string = '{"id":338560084,"name":"Polka Dot","description_format":"html","boilerplate":null,"programming_language":{"id":7,"name":"python","editor_name":"python","extension":"py","created_at":"2018-09-28T13:46:06.000+02:00","updated_at":"2018-09-28T13:46:59.000+02:00"},"last_solution_is_best":true,"has_solution":true,"has_correct_solution":false,"description":"Description","url":"https://naos.ugent.be/nl/courses/1/series/278/exercises/338560084.json"}';
		let exercise_fromJSON = Exercise.fromJSON(json_string);
		expect(exercise_fromJSON).toStrictEqual(Exercise.fromJSON(json_null_boilerplate));
	})

})

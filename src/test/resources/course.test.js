import { randomInt } from "../../lib/helperfunctions";
import { Course } from "../../lib/resources/course"
import { CourseColor } from "../../lib/data/course_color";
/**
 * Tests io.github.thepieterdc.dodona.resources.course.
 */
describe("Tests Course.", () => {
	/**
	 * Tests Course.getId().
	 */
	test("Tests Course.getId().", () => {
		let course_id = Course.getId(`https://dodona.ugent.be/courses/${1}/series/${2}/exercises/${3}`);
		expect(course_id).toBe(1);

		const random_int = randomInt() % 10; // To get rid of exponent.
		expect(random_int).toBeDefined();
		const random_course_id = Course.getId(`https://dodona.ugent.be/courses/${random_int}/series/${2}/exercises/${3}`);
		expect(random_course_id).toBe(random_int);
	})

	/**
	 * Tests Course.getId() using an invalid url.
	 */
	test("Tests Course.getId() using an invalid url.", () => {
		const course_id = Course.getId("https://invalid.url/");
		expect(course_id).toBeNull();
	})


	/**
	 * Tests Couse.getColor() using a course.
	 */
	test("Tests Couse.getColor() using a course.", () => {
		let color = "blue-grey";
		let course = new Course(CourseColor.byName(color), 1, "Programming", "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getColor().name).toBe(color);
	})

	/**
	 * Tests Couse.getName() using a course.
	 */
	test("Tests Couse.getName() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getName()).toBe(name);
	})

	/**
	 * Tests Couse.getSeriesUrl() using a course.
	 */
	test("Tests Couse.getSeriesUrl() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getSeriesUrl()).toBe("132.json");
	})

	/**
	 * Tests Couse.getTeacher() using a course.
	 */
	test("Tests Couse.getTeacher() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getTeacher()).toBe("Someone");
	})

	/**
	 * Tests Couse.getUrl() using a course.
	 */
	test("Tests Couse.getUrl() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getUrl()).toBe("1322");
	})

	/**
	 * Tests Couse.getYear() using a course.
	 */
	test("Tests Couse.getYear() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getYear()).toBe("2017");
	})

	/**
	 * Tests Couse.getId() using a course.
	 */
	test("Tests Couse.getId() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.getId()).toBe(1);
	})

	/**
	 * Tests Couse.toString() using a course.
	 */
	test("Tests Couse.toString() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2017");
		expect(course).toBeTruthy();
		expect(course.toString()).toBe("Course{id=1, name=Programming}");
	})


	/**
	 * Tests Couse.fromJSON() using a course.
	 */
	test("Tests Couse.fromJSON() using a course.", () => {
		let course = Course.fromJSON('{"id":1,"name":"Programming","teacher":"","color":"blue-grey","year":"2016-2017","visibility":"visible_for_all","registration":"open_for_all","created_at":"2016-09-23T11:45:01.000+02:00","updated_at":"2018-10-22T15:32:03.000+02:00","url":"https://naos.ugent.be/nl/courses/1.json","series":"https://naos.ugent.be/nl/courses/1/series.json"}');
		expect(course).toBeTruthy();
		expect(course).toStrictEqual(new Course(CourseColor.byName("blue-grey"), 1, "Programming", "https://naos.ugent.be/nl/courses/1/series.json", "", "https://naos.ugent.be/nl/courses/1.json", "2016-2017"));
	})

	/**
	 * Tests Couse.compareTo() using a course.
	 */
	test("Tests Couse.compareTo() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course1 = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2015-2016");
		let course = Course.fromJSON('{"id":1,"name":"Programming","teacher":"","color":"blue-grey","year":"2016-2017","visibility":"visible_for_all","registration":"open_for_all","created_at":"2016-09-23T11:45:01.000+02:00","updated_at":"2018-10-22T15:32:03.000+02:00","url":"https://naos.ugent.be/nl/courses/1.json","series":"https://naos.ugent.be/nl/courses/1/series.json"}');
		expect(course).toBeTruthy();
		expect(course.compareTo(course1)).toBe(1);
	})

	/**
	 * Tests Couse.compareTo() using a course.
	 */
	test("Tests Couse.compareTo() using a course.", () => {
		let color = "blue-grey";
		let name = "Programming";
		let course1 = new Course(CourseColor.byName(color), 1, name, "132.json", "Someone", "1322.json", "2015-2016");
		let course = Course.fromJSON('{"id":1,"name":"Programming","teacher":"","color":"blue-grey","year":"2015-2016","visibility":"visible_for_all","registration":"open_for_all","created_at":"2016-09-23T11:45:01.000+02:00","updated_at":"2018-10-22T15:32:03.000+02:00","url":"https://naos.ugent.be/nl/courses/1.json","series":"https://naos.ugent.be/nl/courses/1/series.json"}');
		expect(course).toBeTruthy();
		expect(course.compareTo(course1)).toBe(0);
	})
})
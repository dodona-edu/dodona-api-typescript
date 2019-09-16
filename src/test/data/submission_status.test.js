import { SubmissionStatus, SubmissionStatusEnum } from "../../lib/data/submission_status";
import { SubmissionStatusNotFoundException } from "../../lib/exceptions/submission_status_not_found_exception";

/**
 * Tests src.lib.data.submission_status.
 */
describe("Tests SubmissionStatus.", () => {
	/**
	 * Tests SubmissionStatus.byName(String) using the status name.
	 */
	test("Tests SubmissionStatus.byName(String) using the status name.", () => {
		SubmissionStatus.values.forEach(status => {
			const byName = SubmissionStatus.byName(status);
			expect(byName).toBeTruthy();
			expect(byName.getName()).toBe(status);
		})
	})

	/**
	 * Tests SubmissionStatus.byName(String) using a non-existing color.
	 */
	test("Tests SubmissionStatus.byName(String) using a non-existing color.", () => {
		let name = "non-existing-status"
		expect(() => {
			SubmissionStatus.byName(name);
		}).toThrowError(new SubmissionStatusNotFoundException(name));
	})

	/**
	 * Tests SubmissionStatus.getName().
	 */
	test("Tests SubmissionStatus#getName().", () => {
		const amount = SubmissionStatus.values.length;
		const names = SubmissionStatus.values.map((values, index) => new SubmissionStatus(index));
		const actualnames = SubmissionStatus.values;
		expect(names).toBeTruthy();
		names.forEach(name => expect(actualnames).toContain(name.getName()));
		expect(names.length).toBe(amount);
	})

	/**
	 * Tests SubmissionStatus constructor with out of bounds state.
	 */
	test("Tests SubmissionStatus#getName().", () => {
		expect(() => {
			new SubmissionStatus(-1);
		}).toThrowError(new Error(`State '-1' out of bounds [0, ${SubmissionStatus.values.length}]`));
	})

})
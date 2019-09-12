import { SubmissionStatus, SubmissionStatusEnum } from "../../lib/data/submission_status";
import { SubmissionStatusNotFoundException } from "../../lib/exceptions/submission_status_not_found_exception";

/**
 * Tests src.lib.data.SubmissionStatus.
 */

/**
 * Tests SubmissionStatus.byName(String) using the status name.
 */
test("Tests SubmissionStatus.byName(String) using the status name.", () => {
	SubmissionStatus.keys().forEach(key => {
		let status = SubmissionStatusEnum[key];
		const byName = SubmissionStatus.byName(status);
		expect(byName).toBeDefined();
		expect(byName).toBe(status);
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
 * Tests SubmissionStatus#getName().
 */
test("Tests SubmissionStatus#getName().", () => {
	const amount = SubmissionStatus.keys().length;
	const names = SubmissionStatus.keys().map(key => new SubmissionStatus(SubmissionStatusEnum[key]));
	const actualnames = SubmissionStatus.keys().map(key => SubmissionStatusEnum[key]);
	expect(names).toBeDefined();
	names.forEach(name => {
		expect(name).toBeDefined;
		expect(actualnames).toContain(name.getName());
	})
	expect(names.length).toBe(amount);
})
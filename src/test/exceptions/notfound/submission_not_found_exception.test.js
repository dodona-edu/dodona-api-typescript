import { randomInt } from "../../../lib/helperfunctions";
import { SubmissionNotFoundException } from "../../../lib/exceptions/notfound/submission_not_found_exception";

/**
 * Tests src.lib.exceptions.notfound.submission_not_found_exception.
 */
/**
 * Tests SubmissionNotFoundException#getSubmissionUrl().
 */
test("Tests SubmissionNotFoundException#getSubmissionUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SubmissionNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getSubmissionUrl()).toBe(randomcharacters);
})

/**
 * Tests SubmissionNotFoundException#toString().
 */
test("Tests SubmissionNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SubmissionNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(SubmissionNotFoundException.name);
	expect(exception.toString()).toContain(randomcharacters);
})
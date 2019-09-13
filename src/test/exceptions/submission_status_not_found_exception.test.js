import { randomInt } from "../../lib/helperfunctions";
import { SubmissionStatusNotFoundException } from "../../lib/exceptions/submission_status_not_found_exception"

/**
 * Tests src.lib.exceptions.submission_status_not_found_exception.
 */

/**
 * Tests SubmissionStatusNotFoundException#getStatus().
 */
test("Tests SubmissionStatusNotFoundException#getStatus().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SubmissionStatusNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getStatus()).toBe(randomcharacters);
})

/**
 * Tests SubmissionStatusNotFoundException#toString().
 */
test("Tests CourseColorNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SubmissionStatusNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
})


import { randomInt } from "../../../lib/helperfunctions";
import { SubmissionAccessDeniedException } from "../../../lib/exceptions/accessdenied/submission_access_denied_exception";

/**
 * Tests src.lib.exceptions.accessdenied.submission_access_denied_exception.
 */
/**
 * Tests SubmissionAccessDeniedException#getSubmissionUrl().
 */

test("Tests SubmissionAccessDeniedException#getSubmissionUrl()", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SubmissionAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getSubmissionUrl()).toBe(randomcharacters);
})

/**
 * Tests SubmissionAccessDeniedException#toString().
 */
test("Tests SubmissionAccessDeniedException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SubmissionAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
	expect(exception.toString()).toContain(SubmissionAccessDeniedException.name);
})

import { randomInt } from "../../../lib/helperfunctions";
import { UserAccessDeniedException } from "../../../lib/exceptions/accessdenied/user_access_denied_exception";

/**
 * Tests src.lib.exceptions.accessdenied.user_access_denied_exception.
 */
/**
 * Tests UserAccessDeniedException#getUserUrl().
 */

test("Tests UserAccessDeniedException#getUserUrl()", () => {
	const randomcharacters = randomInt().toString();
	const exception = new UserAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getUserUrl()).toBe(randomcharacters);
})

/**
 * Tests UserAccessDeniedException#toString().
 */
test("Tests UserAccessDeniedException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new UserAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
	expect(exception.toString()).toContain(UserAccessDeniedException.name);
})
import { randomInt } from "../../../lib/helperfunctions";
import { UserNotFoundException } from "../../../lib/exceptions/notfound/user_not_found_exception";

/**
 * Tests src.lib.exceptions.notfound.user_not_found_exception.
 */
/**
 * Tests UserNotFoundException#getUserUrl().
 */
test("Tests UserNotFoundException#getUserUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new UserNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getUserUrl()).toBe(randomcharacters);
})

/**
 * Tests UserNotFoundException#toString().
 */
test("Tests UserNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new UserNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(UserNotFoundException.name);
	expect(exception.toString()).toContain(randomcharacters);
})
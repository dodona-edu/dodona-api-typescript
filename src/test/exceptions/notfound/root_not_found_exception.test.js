import { RootNotFoundException } from "../../../lib/exceptions/notfound/root_not_found_exception";

/**
 * Tests src.lib.exceptions.notfound.root_not_found_exception.
 */
/**
 * Tests RootNotFoundException#toString().
 */
test("Tests RootNotFoundException#toString().", () => {
	const exception = new RootNotFoundException();
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(RootNotFoundException.name);
})
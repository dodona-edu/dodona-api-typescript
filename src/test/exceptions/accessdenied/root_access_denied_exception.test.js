import { RootAccessDeniedException } from "../../../lib/exceptions/accessdenied/root_access_denied_exception";

/**
 * Tests src.lib.exceptions.accessdenied.root_access_denied_exception.
 */
/**
 * Tests RootAccessDeniedException#toString().
 */
test("Tests RootAccessDeniedException#toString().", () => {
	const exception = new RootAccessDeniedException();
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(RootAccessDeniedException.name)
})

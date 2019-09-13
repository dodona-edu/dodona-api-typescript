import { AuthenticationException } from "../../lib/exceptions/authentication_exception"

/**
 * Tests io.github.thepieterdc.dodona.exceptions.AuthenticationException.
 */
/**
 * Tests AuthenticationException.invalid().
 */
test("Tests AuthenticationException.invalid().", () => {
	expect(() => {
		throw AuthenticationException.invalid();
	}).toThrowError(new Error(AuthenticationException.INVALID));
})

/**
 * Tests AuthenticationException.missing().
 */
test("Tests AuthenticationException.missing().", () => {
	expect(() => {
		throw AuthenticationException.missing();
	}).toThrowError(new Error(AuthenticationException.MISSING));
})

/**
 * Tests AuthenticationException#toString().
 */
test("Tests AuthenticationException#toString().", () => {
	const invalid = AuthenticationException.invalid();
	expect(invalid).toBeDefined();
	expect(invalid.toString()).toBeDefined();
	expect(invalid.toString()).toContain(AuthenticationException.INVALID);

	const missing = AuthenticationException.missing();
	expect(missing).toBeDefined();
	expect(missing.toString()).toBeDefined();
	expect(missing.toString()).toContain(AuthenticationException.MISSING);
})

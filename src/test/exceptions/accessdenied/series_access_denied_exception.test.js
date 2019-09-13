import { randomInt } from "../../../lib/helperfunctions";
import { SeriesAccessDeniedException } from "../../../lib/exceptions/accessdenied/series_access_denied_exception";

/**
 * Tests src.lib.exceptions.accessdenied.series_access_denied_exception.
 */
/**
 * Tests SeriesAccessDeniedException#getSeriesUrl().
 */

test("Tests SeriesAccessDeniedException#getSeriesUrl()", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SeriesAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getSeriesUrl()).toBe(randomcharacters);
})

/**
 * Tests SeriesAccessDeniedException#toString().
 */
test("Tests SeriesAccessDeniedException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SeriesAccessDeniedException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(randomcharacters);
	expect(exception.toString()).toContain(SeriesAccessDeniedException.name);
})

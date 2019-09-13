import { randomInt } from "../../../lib/helperfunctions";
import { SeriesNotFoundException } from "../../../lib/exceptions/notfound/series_not_found_exception";

/**
 * Tests src.lib.exceptions.notfound.series_not_found_exception.
 */
/**
 * Tests SeriesNotFoundException#getSeriesUrl().
 */
test("Tests SeriesNotFoundException#getSeriesUrl().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SeriesNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.getSeriesUrl()).toBe(randomcharacters);
})

/**
 * Tests SeriesNotFoundException#toString().
 */
test("Tests SeriesNotFoundException#toString().", () => {
	const randomcharacters = randomInt().toString();
	const exception = new SeriesNotFoundException(randomcharacters);
	expect(exception).toBeDefined();
	expect(exception.toString()).toBeDefined();
	expect(exception.toString()).toContain(SeriesNotFoundException.name);
	expect(exception.toString()).toContain(randomcharacters);
})
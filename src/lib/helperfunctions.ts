export function compare<T>(first: T, second: T): number {
    if (first === second) {
        return 0;
    } else if (first < second) {
        return -1;
    } else {
        return 1;
    }
}

/**
 * Returns a random integer between 0 and Number.MAX_VALUE.
 */
export function randomInt() {
    return Math.floor(Math.random() * (Number.MAX_VALUE));
}
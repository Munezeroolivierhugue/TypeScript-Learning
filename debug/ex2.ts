// Create a generic function wrapInArray that returns an array containing the input value, maintaining its type.
// Usage:

function wrapInArray<T>(value: T): T {
    return value;
}

const result = wrapInArray(42); // number[]
const result1 = wrapInArray("hello"); // string[]
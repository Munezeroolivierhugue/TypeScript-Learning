"use strict";
// name : Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicOp = basicOp;
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
function basicOp(operation, value1, value2) {
    console.log('a' > 'b');
    if (operation === '+') {
        return value1 + value2;
    }
    else if (operation === '-') {
        return value1 - value2;
    }
    else if (operation === '*') {
        return value1 * value2;
    }
    else if (operation === '/') {
        return value1 / value2;
    }
    else {
        return 0;
    }
}
//Testing
console.log(basicOp('+', 4, 7), ':::::::::::Test 1:::::::::::');
console.log(basicOp('-', 15, 18), ':::::::::::Test 2:::::::::::');
console.log(basicOp('*', 5, 5), ':::::::::::Test 3:::::::::::');
console.log(basicOp('/', 49, 7), ':::::::::::Test 4:::::::::::');

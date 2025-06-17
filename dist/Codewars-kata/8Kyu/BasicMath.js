"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicOp = basicOp;
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
console.log(basicOp('+', 4, 7), ':::::::::::Test 1:::::::::::');
console.log(basicOp('-', 15, 18), ':::::::::::Test 2:::::::::::');
console.log(basicOp('*', 5, 5), ':::::::::::Test 3:::::::::::');
console.log(basicOp('/', 49, 7), ':::::::::::Test 4:::::::::::');

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOfSum = typeOfSum;
function typeOfSum(a, b) {
    return `${typeof (a + b)}`;
}
console.log(typeOfSum("hello", "world"));

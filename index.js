"use strict";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
const user = [1, "John", Role.User];
function greet(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(user); // [1, "John", "USER"]
console.log(greet("Alice", 25)); // Hello, Alice! You are 25 years old.
// Avoid 'any' when possible
let unknownValue = "test";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // TEST
}

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
console.log(user);
console.log(greet("Alice", 25));
let unknownValue = "test";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

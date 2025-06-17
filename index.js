var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var user = [1, "John", Role.User];
function greet(name, age) {
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
console.log(user); // [1, "John", "USER"]
console.log(greet("Alice", 25)); // Hello, Alice! You are 25 years old.
// Avoid 'any' when possible
var unknownValue = "test";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // TEST
}

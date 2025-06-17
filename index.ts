enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

const user: [number, string, Role] = [1, "John", Role.User];

function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(user); // [1, "John", "USER"]
console.log(greet("Alice", 25)); // Hello, Alice! You are 25 years old.

// Avoid 'any' when possible
let unknownValue: unknown = "test";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // TEST
}
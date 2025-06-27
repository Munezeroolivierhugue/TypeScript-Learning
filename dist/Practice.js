"use strict";
const human = {
    User: { name: "hugue", age: 20 },
};
function myUser(person) {
    console.log(person);
    person.User.age++;
}
console.log(myUser(human));

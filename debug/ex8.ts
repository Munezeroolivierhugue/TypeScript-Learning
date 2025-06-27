// Type this function to ensure name is required and age is optional
function describePerson(person) {
  const agePart = person.age ? ` who is ${person.age} years old` : '';
  return `${person.name}${agePart}`;
}


const user2 = { id: 1, username: "alice" };

getProperty(user2, 'username') should return a string
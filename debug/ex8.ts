// Type this function to ensure name is required and age is optional
type PersonDescription = {
    id: number
    name: string,
    age?: number
}
function describePerson(person: PersonDescription) {
  const agePart = person.age ? ` who is ${person.age} years old` : '';
  return `${person.name}${agePart}`;
}


const user2 = { id: 1, name: "alice" };
console.log(describePerson(user2))

// getProperty(user2, 'username') should return a string
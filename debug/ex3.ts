// Type the user object and ensure proper autocompletion
type User = {
    name: string,
    age: number,
    isAdmin: boolean
}

const user1: User = {
  name: "Alice",
  age: 30,
  isAdmin: false,
};

function printUserInfo (u: User) {
  console.log(`${u.name} (${u.age}) - Admin: ${u.isAdmin}`);
}

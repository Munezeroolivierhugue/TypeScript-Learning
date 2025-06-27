// 1. difference between any and unknown, which is safer
// 2. differentiate function void and variable void
// 3. what happens when you return undefined in never function
// 4. difference between types and interfaces :::::::::: interface supports merging, extends but not type
// 5. type assertion vs annotation
// 6. type narrowing vs type guards
// 7. index signature

// type User = {
//     age: number
// }

// interface SuperUser extends User{
//     name: string,
// }

// let superUser: SuperUser = {
//     age: 12,
//     name: "name"
// }

// function hugue1 (): never {
//     while(true){

//     }
// }

// type user<UserData,User> = {
//     data: UserData,
//     status: number,
//     error?: String
// }

// let arr: number[] = []
// let arr2: Array<number> = []

interface Person {
  readonly User: {
    name: string;
    age: number;
  };
}

const human: Person = {
  User: { name: "hugue", age: 20 },
};

function myUser(person: Person) {
  console.log(person);
  person.User.age++;
}

console.log(myUser(human))

// interface Home {
//   readonly resident: { name: string; age: number };
// }

// function visitForBirthday(home: Home) {
//   // We can read and update properties from 'home.resident'.
//   console.log(`Happy birthday ${home.resident.name}!`);
//   home.resident.age++;
// }

// function evict(home: Home) {
//   // But we can't write to the 'resident' property itself on a 'Home'.
//   home.resident = {
// Cannot assign to 'resident' because it is a read-only property.
//     name: "Victor the Evictor",
//     age: 42,
//   };
// }

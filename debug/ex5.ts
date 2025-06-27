// Update the function to accept a tuple and destructure it correctly
function greet1([firstName, lastName]: [string,string]): string {
  return `Hello, ${firstName} ${lastName}`;
}

console.log(greet1(["Jane", "Doe"]));
export function typeOfSum(a:any, b:any):string {
  return `${typeof(a+b)}`
}

// console.log(typeOfSum(10,4))
console.log(typeOfSum("hello","world"))
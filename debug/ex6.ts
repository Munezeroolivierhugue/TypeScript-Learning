// Fix typing issues and preserve return type inference
const makeAdder = (x: number): Function => {
  return (y:number):number => x + y;
};

const add5 = makeAdder(5);
const result2 = add5(10);
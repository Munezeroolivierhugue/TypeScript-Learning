// Create a union type Shape and implement the getArea function using type guards
type Circle = {
    kind: 'circle',
    radius: number,
}

type Rectangle = {
    kind: "rectangle",
    height: number,
    width: number
}

type Shape = Circle | Rectangle// define Circle and Rectangle

function getArea(shape: Shape): number | string{
  // Use type guards to return correct 
  if(shape.kind === "rectangle"){
    return shape.height
  }
  else{
    return shape.radius
  }
}

getArea({ kind: 'circle', radius: 10 })
getArea({ kind: 'rectangle', width: 4, height: 5 })
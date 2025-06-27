type hugue = "name" | "age" | "role";
type bh = {
    kind: string,
    department: string,
    anniversary: number
}

type hugueKeys = { [T in hugue]: string|number }

let employee: hugueKeys ={
    name: "John",
    age: 23,
    role: "admin",

}

function loopOver(employee: hugueKeys): any{
    if(typeof employee ){

    }
    else{

    }
}
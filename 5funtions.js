



let u1=sayhello("gowtham");
let u2=sayhello("ram");
let u3=sayhello("siva");

//funtion declaration

function sayhello(username){
    return "hi  "+username
}

console.log(u1,u2,u3);

//function expression

let add = function (a,b){
    return a+b;
}

let result= add(4,2)
console.log(result);

//know what is global scope and loacal scope (or) function scope.

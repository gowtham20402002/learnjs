let a= 10;
let b=a;
b=20;
console.log(a);
console.log(b);


let c={value:10};// c is holding a reference to memory block where this obj was stored
let d=c;         // you just passed the same refercial address to the variable d now
//the thing that we have just done is called as shallow copy
// the reference is still remaining
d.value=20;

console.log(c);
console.log(d);

//deeep copy
console.log("deep copy")
let x={value:10};
let y={...x};

y.value=20;

console.log(x);
console.log(y);

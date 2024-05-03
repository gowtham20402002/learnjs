const arr=[5,6,1,2,3,7,8];


function double(x){
    return x *2;
}

function triple(x){
    return 3*x;
}

const output=arr.map(triple);

console.log(output)
const arr=[4,5,6,3,2,1,2,4];

function isodd(x){
    return x%2 ;
}

even=(x) => {
return x%2===0;
}

const output=arr.filter(even);
console.log(output)

const users = [
    {firstname:"gowtham",lastname:"pedasingu",age:21},
    {firstname:"ram",lastname:"sita",age:30},
    {firstname:"siva",lastname:"parvathi",age:50},
    {firstname:"ram",lastname:"lakshman",age:40},
];

const output = users.map((x) =>{ 
     return x.firstname+ " "+x.lastname
});
console.log(output);
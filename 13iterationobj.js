let dummy = {
    id:1234,
    name:'gowtham',
    department:"ECE"
}

//itereration ob ojects
for(let i in dummy);
//console.log(i)


//console.log(Object.keys(dummy));

let students = [
    {name:"abc",rno:10001,marks:50},
    {name:"xyz",rno:10002,marks:80},
    {name:"pqr",rno:10003,marks:30},
    {name:"lmn",rno:10004,marks:40},
    {name:"uvw",rno:10005,marks:90}
]

// find the average of the students who have scored more than or equals 60,
//after getting a grace of 10 marks who scored less than 60

let ls=students.filter((items)=>{
    return items.marks < 60
    
})



let gracemarks= ls.map((items)=>{items.marks = items.marks+10
      
       return items;
})

console.log(gracemarks)




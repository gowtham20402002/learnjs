//let arr = [90, true , 'ram',"siva", {score:90}];
let arr = [90, 20 , 10,3, 8];

//arr.forEach(function callback(element,indx){
  //  console.log(indx)
//})


//arr.forEach((element)=>{
  //  console.log(element)
//})


  let doubkearray=arr.map((element)=>{
    return element*2;
});


//console.log(doubkearray);


let filterarray=arr.filter((element)=>{
    return element >11;
});

console.log(filterarray);


//in this session you leartned about
// ARRAY METHODS foreach, map, filter, reduce



//function declaration

// passing another function as also totally valid
 
function func1( helperfunction){
    // body of the function
    helperfunction();
}

// function expression

let func2 = function (){
    //body of the expression

    // returning another function from a function is totally valid

    return func1;
    
}
function sayhello(){
    console.log("hello user");
}

function greet(heofn){
    heofn();

}

greet(sayhello);
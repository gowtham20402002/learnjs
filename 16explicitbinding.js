//call
let person = {
    name: 'ram sita',
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    
    }
};

let anothernperson={
    name:"lashman",
    age:25
}

person.greet.call(anothernperson);


//apply

const persons = {
    name: "John",
    age: 30,
    greet: function(greeting, farewell) {
      console.log(greeting + ", my name is " + this.name + " and I am " + this.age + " years old. " + farewell);
    }
  }
  
  const anotherPerson = {
    name: "Jane",
    age: 25
  }
  
  persons.greet.apply(anotherPerson, ["Hello", "Goodbye"]);

//bind
let person2={
    name: "ram",
    age:500,
    greet: function(){
     console.log("hello , my name is"+this.name+ "and i am"+this.age+"years o0ld")
    }
 };
 let anotherper={
     name:"mike",
     age:65
 }
 
 
 const bindperson=person2.greet.bind(anotherper);
 bindperson();
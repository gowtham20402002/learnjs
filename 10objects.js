// 1. Object literal
let myPetCat = {
    // properties
    name: "Tom",
    age: "5 years",
    favFood: "Fish",

    // methods / functions / behaviour
    meow: () => {
        console.log('my cat meows')
    },
    plays: () => {
        console.log("my cat plays")
    }
}

// 2 . using constructor
let myPetDog = new Object({
    name: "Bob",
    age: "10 years",
    favFood: "Bones",

    // methods / functions / behaviour
    barks: () => {
        console.log('my dog barks')
    },
    plays: () => {
        console.log("my dog plays")
    }
})
delete myPetCat.age;
myPetCat.name = 'tom 2.0';
myPetCat.haircolor='merun'

console.log(myPetCat.haircolor);
console.log(myPetCat);

// function invoking

myPetCat.meow();
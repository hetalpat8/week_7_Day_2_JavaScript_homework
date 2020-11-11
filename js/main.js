//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

    for (let i = 0; i < Object.keys(person3).length; i++) {
        if (Array.isArray(Object.values(person3)[i])) {
        console.log(Object.values(person3)[i])
        console.log(Object.keys(person3)[i])
        }
    }
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name;
    this.age = age += 1;

    this.printInfo = () => {
        return `Your ${this.name}, You are ${this.age} old)`
    }
}

let new_person = new Person('Jane', 96);
console.log(new_person.printInfo())

let new_person = new Person1('Bob', 90);
console.log(new_person1.printInfo())

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const wordLength = (num) => {
    return new Promise((resolve,reject) => {
        if(num > 10){
            resolve(true);
        }
        else {
            reject(false);
        }
    })
}
console.log(wordLength())

// using the above promise
wordLength(3).then((result) => {
    console.log('Big word', result)
}).catch((error) => {
    console.log('Small Number', error)
})

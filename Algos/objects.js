// 1. Object Property Shorthand:

// Write a function that takes in two parameters, 'firstName' and 'lastName', 
// and returns an object with the properties firstName and lastName.

function fullName(firstName, lastName){
    return {
        firstName: firstName,
        lastNAme: lastName
    }
}

console.log(fullName("Abraha", "Kashay"))

// 2. Object Method Properties:

// Write a function that takes in a string parameter and returns an object 
// with two methods: toUpperCase and toLowerCase that return the uppercase 
// and lowercase versions of the string, respectively.

function letterCases(string){
    return{
        toUpperCase: string.toUpperCase()
        ,
        toLowerCase: string.toLowerCase()
    }
}

console.log(letterCases("Abraha"))

// 3. Object Destructuring:
// Given an object with the properties firstName and lastName, write a function
//  that returns an array [firstName, lastName] using object destructuring.
const person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
const { firstName, lastName } = person;
  
  console.log(firstName); // 'John'
  console.log(lastName); // 'Doe'
  
//4.   Creating a new object with a prototype:
  const personProto = {
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const john = Object.create(personProto);
  john.name = 'John';
  john.age = 30;
  john.city = 'New York';
  
  john.greet(); // 'Hello, my name is John.'
  

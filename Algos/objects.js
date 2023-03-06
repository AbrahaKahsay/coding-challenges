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
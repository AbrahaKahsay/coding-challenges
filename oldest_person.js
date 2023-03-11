// Challenge: Find the Oldest Person
// Given an array of objects representing people with their birth and death 
// years, write a function findOldest that returns the name of the oldest person.

const people = [
    { name: "Emma", birthYear: 1989, deathYear: 2020 },
    { name: "John", birthYear: 1952, deathYear: 2018 },
    { name: "Mary", birthYear: 1973, deathYear: 2022 },
    { name: "Harry", birthYear: 1965, deathYear: 2010 }
];

  
findOldest(people); // should return "Mary"

function findOldest(people) {
    let oldestPerson = people[0];
    for (let i = 1; i < people.length; i++) {
      if (people[i].deathYear - people[i].birthYear > oldestPerson.deathYear - oldestPerson.birthYear) {
        oldestPerson = people[i];
      }
    }
    return oldestPerson.name;
}
  
// Create complex multi-dimensional arrays

let myNestedArray = [
    // Only change code below this line
    'first level',
    ["second level"],
    [["third level", "deep"]],
    [[['fourth level', 'deeper']]],
    [[[["fivth level", 'deepest']]]]
    // Only change code above this line
];

//++++++++++++++++++++++++++++++++++++++++++++++++
// Look at the following example for object key value
const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

// I am going to explain how to use dot notation and bracket notation to
// add a key-value pair here.

//let's add origin property using dot notation,
tekkenCharacter.origin = 'Korea';

// if the property has is space separated word use bracket notation
tekkenCharacter['hair color'] = 'dyed orange';

console.log(tekkenCharacter);
//------------------------------------------------------------
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};
  
  // Only change code below this line
  foods.strawberries = 27,
  foods.bananas = 13;
  foods.grapes = 35;
  // Only change code above this line
  
console.log(foods);
//----------------------------------------------------------


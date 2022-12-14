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
// Add key-value pairs to JavaScript objects
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

// Modify an Object Nested Within an Object
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45
  // Only change code above this line
  
  console.log(userActivity);
// ------------------------------------------------

// Access Property Names with Bracket Notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
  return foods[scannedItem]
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));


  //----------------------------------------------

// Use the delete Keyword to Remove Object Properties

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // Only change code below this line
  delete foods.oranges
  delete foods.plums
  delete foods.strawberries
  // Only change code above this line
  
  console.log(foods);

  //----------------------------------------------

  let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Only change code below this line
    if(userObj.hasOwnProperty('Alan') &&
    userObj.hasOwnProperty('Jeff') &&
    userObj.hasOwnProperty('Sarah') &&
    userObj.hasOwnProperty('Ryan')){
      return true
    } else {
      return false
    }
    // Only change code above this line
  }
  
  console.log(isEveryoneHere(users));
  //------------------------------------------------
  // Iterate Through the Keys of an Object with a for...in Statement

// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for(let user in usersObj){
    if(usersObj[user].online === true){
      count++;
      }
    }
    return count
  // Only change code above this line
}

console.log(countOnline(users));


// Generate an Array of All Object Keys with Object.keys()
// let users = {
//   Alan: {
//     age: 27,
//     online: false
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: false
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

function getArrayOfUsers(obj) {
  // Only change code below this line
return Object.keys(obj)
  // Only change code above this line
}

console.log(getArrayOfUsers(users));

//------------------------------------------
//Modify an Array Stored in an Object

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));

//-------------------------------
// Faulsy bouncer

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);


// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
// The function should return the sorted array.

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort()
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArray variable.
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Only change code above this line
}

nonMutatingSort(globalArray);


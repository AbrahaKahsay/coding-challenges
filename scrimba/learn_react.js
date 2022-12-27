// React is composable. we can produce custom components that can be reused
// React is declerative. you need to tell it what should be done and it handles the other things.
// The opposite for declerative is imperative where you describe how the code should be excuted like
// the way we do in vanilla JavaScript.


// Imperative way
// Challenge - recreate the above line of code in vanilla JS by creating and
// appending an h1 to our div#root (without using innerHTML).

// - Create a new h1 element
// - Give it some textContent
// - Give it a class name of "header"
// - append it as a child of the div#root

const h1 = document.createElement("h1");
h1.textContent = "I am doing imperative way of writing JavaScript";
h1.className = "header";
document.getElementById("root").appendChild(h1)
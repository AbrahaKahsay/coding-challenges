// 1. React is composable. we can produce custom components that can be reused
// 2. React is declerative. you need to tell it what should be done and it handles the other things.
//      The opposite for declerative is imperative where you describe how the code should be excuted like
//      the way we do in vanilla JavaScript.


// Declarative way to program in react.
 ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

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

Challenge: 

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now

    const navbar = (
        <nav>
            <h1>Kenean Academy</h1>
            <ul>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )

ReactDOM.render(navbar, document.getElementById("root"))
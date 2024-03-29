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

// Challenge: 

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


/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */


    import React from "react"
    import ReactDOM from "react-dom"
    
    function Page() {
        return (
            <div>
                <header>
                    <nav>
                        <img src = "./react-logo.png" alt="logo" class = "logo" />
                    </nav>
                </header>
                <h1>Reasons I am excited to learn React!</h1>
                <ol>
                    <li>It's a popular library, so I'll be 
                    able to fit in with the cool kids!</li>
                    <li>I'm more likely to get a job as a developer
                    if I know React</li>
                </ol>
                <footer>
                    <p>© 2022 Abraha development. All rights reserved </p>
                </footer>
            </div>
        )
    }
    
    ReactDOM.render(<Page />, document.getElementById("root"))
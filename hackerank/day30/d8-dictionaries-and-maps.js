function processData(input) {
    // Split input into lines
    let lines = input.split("\n");
    // Parse first line to get number of contacts
    let n = parseInt(lines[0]);
    // Initialize empty phonebook object
    let phonebook = {};
    // Add contacts to phonebook
    for (let i = 1; i <= n; i++) {
        let contact = lines[i].split(" ");
        let name = contact[0];
        let number = contact[1];
        phonebook[name] = number;
    }
    // Parse queries
    for (let i = n + 1; i < lines.length; i++) {
        let name = lines[i];
        if (phonebook.hasOwnProperty(name)) {
            console.log(name + "=" + phonebook[name]);
        } else {
            console.log("Not found");
        }
    }
}

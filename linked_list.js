// create a function for a new node object 
class Node {
    constructor(value, next_node = null){
        this.value = value;
        this.next_node = next_node;
    }
}

// create the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}



let node1 = new Node("hello")
console.log(node1)
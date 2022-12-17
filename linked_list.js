// create a function for a new node object 
class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

// create the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        // this.length = 0;
    }

        // the prepend method adds a LinkedListNode object
        // the begining of our LinkedList.
    prepend(value){
        // make new node to be a head
        const newNode = new Node(value, this.head);
        this.head = newNode;
        // if there is no tail yet let's make new node a tail
        if(this.tail === null) { //this is same as !this.tail
        this.tail = newNode
        }
        return this;
    }

    append(value){   //this method creates a Node object to the end of our linked list.
        const newNode = new Node(value);
        // If there is no head yet let's make new node a head.
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            // Then, we get the value of this.tail and set that objects next property to be our newly created
            // LinkedListNode object.
            const currentTail = this.tail;
            currentTail.next = newNode;
        // Attach new node to the end of linked list.
        this.tail = newNode;
        }
        return this;
    }

    delete(value) {
        if (!this.head) {
        return null;
        }
    }
}
// create a function for a new node object 
class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

// create the LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        // this.length = 0;
    }

        // the prepend method adds a LinkedListNode object
        // the begining of our LinkedList.
    prepend(value){
        // make new node to be a head
        const newNode = new Node(value, this.head);
        this.head = newNode;
        // if there is no tail yet let's make new node a tail
        if(this.tail === null) { //this is same as !this.tail
        this.tail = newNode
        }
        return this;
    }

    append(value){   //this method creates a Node object to the end of our linked list.
        const newNode = new Node(value);
        // If there is no head yet let's make new node a head.
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
            // Then, we get the value of this.tail and set that objects next property to be our newly created
            // LinkedListNode object.
            const currentTail = this.tail;
            currentTail.next = newNode;
        // Attach new node to the end of linked list.
        this.tail = newNode;
        }
        return this;
    }

    delete(value) {
        if (!this.head) {
        return null;
        }
    }
    
}

let ll = new LinkedList();
console.log(ll.append(30));
console.log(ll.append(40));
// console.log(ll)
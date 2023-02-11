// create a node class
// create a linked list class with multiple methods

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // write a method to add a linked list to head
    addNodeToTail(value){
        //first create new node and do the additions
        let newNode = new Node(value)
        
        if(this.head == null){
            this.head = newNode
        } else{
            this.tail.next = newNode
        }

        this.tail = newNode
        this.length++;
    }

    removeFromHead(){

        if(this.head === null){
            return null
        }
        
        if(this.head != null){
            this.head = this.head.next
        }

        this.length--
    }
}

// let ll = new LinkedList()

// ll.addNodeToTail(6)
// ll.addNodeToTail(2)
// ll.addNodeToTail(10)
// ll.removeFromHead()

// console.log(ll)

let num = "100";
let result = parseInt(num, 2);

console.log(result);
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    addToTail(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
      this.length++;
    }
  
    removeFromHead() {
      if (!this.head) return null;
  
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
  
      if (this.length === 0) {
        this.tail = null;
      }
  
      return value;
    }
  
    // find(value) {
    //   let currentNode = this.head;
  
    //   while (currentNode) {
    //     if (currentNode.value === value) return currentNode;
    //     currentNode = currentNode.next;
    //   }
  
    //   return null;
    // }
  }
  
  let ll = new LinkedList
  ll.addToTail(3)
  ll.addToTail(5)
  ll.addToTail(100)
  ll.addToTail(3)
  ll.addToTail("Yo")

  console.log(ll)
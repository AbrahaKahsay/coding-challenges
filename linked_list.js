// LinkedList is the dynamic data structure, as we can add or remove elements at ease, 
// and it can even grow as needed. Just like arrays, linked lists store elements sequentially, 
// but don’t store the elements contiguously like an array. 

// User defined class node
class Node {
	// constructor
	constructor(element)
	{
		this.element = element;
		this.next = null
	}
}

// As in the above code, we define a class Node having two properties: 
// element and next. Element holds the data of a node while next holds the pointer 
// to the next node, which is initialized to the null value.

// Now, let’s see an implementation of the Linked List class: 
// linkedlist class
class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}

	// functions to be implemented
	// add(element)
	// insertAt(element, location)
	// removeFrom(location)
	// removeElement(element)

	// Helper Methods
	// isEmpty
	// size_Of_List
	// PrintList
}

function mergeSortedLinkedLists(l1, l2) {
    // create a new empty linked list
    let merged = new ListNode(-1);
    let tail = merged;
    
    // traverse both input linked lists
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    
    // add remaining nodes from either list
    if (l1 !== null) {
      tail.next = l1;
    }
    if (l2 !== null) {
      tail.next = l2;
    }
    
    // return the merged list (excluding the dummy head)
    return merged.next;
  }
  
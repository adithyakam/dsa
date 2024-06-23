class Node {
  constructor(root, next) {
    this.root = root;
    this.next = next;
  }
}

class ll {
  constructor() {
    this.head = null;
  }

  insertatbegin(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  insertatend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let last = this.head;
    while (last.next) {
      last = last.next;
    }

    last.next = newNode;
  }

  insertatnode(data, place) {
    let nn = new Node(data, place.next);

    place.next = nn;
  }

  delatfirst() {
    if (this.head == null) return null;
    if (!this.head) {
      console.log("The given prev node cannot be null");
      return;
    }
    this.head = this.head.next;
  }

  delatend() {
    if (this.head == null) return null;
    if (!this.head.next) {
      this.head = null; // if there is only one node
      return;
    }

    let last = this.head;

    while (last.next.next) {
      last = last.next;
    }

    last.next = null;
  }

  delatkeykey(key) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (this.head.root == key) {
      this.head = this.head.next;
      return;
    }

    let cur = this.head;
    while (cur.next) {
      if (cur.next.root == key) {
        cur = cur.next;
      }

      cur.next = cur.next.next;
    }
  }

  search(key) {
    let cur = this.head;

    while (cur) {
      if (cur.root == key) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  reverse() {
    let cur = this.head;
    let prev = null;
    let next = null;

    while (cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  printList = function () {
    let current = this.head;

    let listValues = [];
    while (current) {
      listValues.push(current.root); // add data to list
      current = current.next; //move to next node
    }
    console.log(listValues.join(" -> "));
  };
}

// Test the corrected code
let linkedList = new ll();

// Insert at the beginning
linkedList.insertatbegin(10);
linkedList.printList(); // Expected: 10
linkedList.insertatbegin(20);
linkedList.printList(); // Expected: 20 -> 10

// Insert at the end
linkedList.insertatend(30);
linkedList.printList(); // Expected: 20 -> 10 -> 30

// Insert at a specific node (after node with value 20)
let placeNode = linkedList.head; // Node with value 20
linkedList.insertatnode(25, placeNode);
linkedList.printList(); // Expected: 20 -> 25 -> 10 -> 30

// Delete the first node
linkedList.delatfirst();
linkedList.printList(); // Expected: 25 -> 10 -> 30

// Delete the last node
linkedList.delatend();
linkedList.printList(); // Expected: 25 -> 10

// Delete a node with a specific key (25)
linkedList.delatkeykey(25);
linkedList.printList(); // Expected: 10

// Search for values
console.log(linkedList.search(10)); // Expected: true
console.log(linkedList.search(30)); // Expected: false
console.log(linkedList.search(40)); // Expected: false

// Reverse the list
linkedList.insertatbegin(20);
linkedList.insertatbegin(30);
linkedList.printList(); // Expected: 30 -> 20 -> 10
linkedList.reverse();
linkedList.printList(); // Expected: 10 -> 20 -> 30

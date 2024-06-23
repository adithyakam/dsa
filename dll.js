class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Dll {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(data) {
    const nn = new Node(data, this.head, null);
    if (this.head !== null) {
      this.head.prev = nn;
    }
    this.head = nn;
    if (this.tail === null) {
      this.tail = nn;
    }
  }

  insertAtEnd(data) {
    const newNode = new Node(data, null, this.tail);

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (this.head === null) {
      this.head = newNode;
    }
  }

  insertAfter(data, prevNode) {
    if (prevNode == null) {
      console.log("Invalid prev node");
      return;
    }
    const nn = new Node(data, prevNode.next, prevNode);
    if (prevNode.next !== null) {
      prevNode.next.prev = nn;
    }
    prevNode.next = nn;

    if (nn.next == null) {
      this.tail = nn;
    }
  }

  deleteFirstNode() {
    if (this.head !== null) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  deleteLastNode() {
    if (this.head == null) {
      return null;
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  reverse() {
    let cur = this.head;
    let temp = null;

    while (cur) {
      temp = cur.prev;
      cur.prev = cur.next;
      cur.next = temp;
      cur = cur.prev;
    }

    if (temp != null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }
}

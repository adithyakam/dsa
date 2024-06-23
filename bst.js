class Node {
  constructor(key, left = null, right = null) {
    this.key = key;
    this.right = right;
    this.left = left;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(node, nn) {
    if (node.key < nn.key) {
      if (node.left === null) {
        node.left = nn;
      } else {
        this.insertNode(node.left, nn);
      }
    } else if (node.key > nn.key) {
      if (node.right === null) {
        node.right = nn;
      } else {
        this.insertNode(node.right, nn);
      }
    }
  }

  insert(data) {
    let nn = new Node(data);

    if (this.root == null) {
      this.root = nn;
    } else {
      this.insertNode(this.root, nn);
    }
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  deleteNode(node, key) {
    if (!node) return null;

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else if (node.right !== null && node.left !== null) {
        let min = this.findMin(node.right);

        node.key = min.key;
        node.right = this.deleteNode(node.right, min.key);
      }

      return node;
    }
    return node;
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  inorder(node, res) {
    if (node !== null) {
      this.inorderTraversal(node.left, res);
      res.push(node.key);
      this.inorderTraversal(node.right, res);
    }
  }

  inorderTraversal() {
    let res = [];
    this.inorder(this.root, res);
    return res;
  }
}

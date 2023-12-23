const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!data) return;
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let current = this.rootNode;
    while (current) {
      if (current.data > data) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return;
        }
      } else if (current.data < data) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return;
        }
      } else {
        return;
      }
    }
  }

  has(data) {
    if (!this.rootNode) return false;
    let current = this.rootNode;
    while (current) {
      if (current.data === data) return true;
      if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (current) {
      if (current.data === data) return current;
      if (current.data > data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min(root = this.rootNode) {
    if (!root) return null;
    while (root.left) {
      root = root.left;
    }
    return root.data;
  }

  max(root = this.rootNode) {
    if (!root) return null;
    while (root.right) {
      root = root.right;
    }
    return root.data;
  }
}

module.exports = {
  BinarySearchTree,
};

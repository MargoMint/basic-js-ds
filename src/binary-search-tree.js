const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    if (!this._root) {
      this._root = new Node(data);
      return;
    }
    let currentNode = this._root;
    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(data);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }
  _removeNode(currentNode, data) {
    if (!this._root) {
      return null;
    }
    if (data < currentNode.data) {
      currentNode.left = this._removeNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this._removeNode(currentNode.right, data);
      return currentNode;
    } else {
      if (!currentNode.left && !currentNode.right) {
        return null;
      } else if (!currentNode.left) {
        return currentNode.right;
      } else if (!currentNode.right) {
        return currentNode.left;
      } else {
        let minNode = this._minNode(currentNode.right);
        currentNode.data = minNode.data;
        currentNode.right = this._removeNode(currentNode.right, minNode.data);
        return currentNode;
      }
    }
  }
  _minNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  min() {
    if (!this._root) {
      return null;
    }
    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }
    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
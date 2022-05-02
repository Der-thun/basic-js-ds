const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }

  root() {
    return this.rootElem;
  }

  add(data) {
    this.rootElem = addElem(this.rootElem, data);

    function addElem(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addElem(node.left, data);
      } else {
        node.right = addElem(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchElem(this.rootElem, data);

    function searchElem(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return (node.data > data) ? searchElem(node.left, data) : searchElem(node.right, data);
    }
  }

  find(data) {
    return findElem(this.rootElem, data);

    function findElem(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return (node.data > data) ? findElem(node.left, data) : findElem(node.right, data);
    }
  }

  remove(data) {
    this.rootElem = removeElem(this.rootElem, data);

    function removeElem(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeElem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeElem(node.right, data)
        return node
      }else {
        if (!node.left && !node.right) return null
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left;
          return node
        }

        let minFromRight = node.right
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeElem(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    if (!this.rootElem) {
      return;
    }
    let node = this.rootElem
    while(node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if (!this.rootElem) {
      return;
    }
    let node = this.rootElem
    while(node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};
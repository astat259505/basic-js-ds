const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }
  
  root() {
     return this.mainRoot
  }

  add(data) {
  this.mainRoot = recursiveAdd(this.mainRoot, data) 

    function recursiveAdd(node, data) {
      if (!node) {
        return new Node(data)
      } if (node.data == data) {
        return node
      } if (data < node.data) {
        node.left = recursiveAdd(node.left, data)
      } if (data > node.data) {
        node.right = recursiveAdd(node.right, data)
      }
      return node
    }
  }

  has(data) {
  return recursiveHas(this.mainRoot, data)
   
    function recursiveHas(node, data) {
      if (!node) {
        return false
      } if (node.data == data) {
        return true
      } if (data < node.data) {
        return recursiveHas(node.left, data)
        
      } if (data > node.data) {
        return recursiveHas(node.right, data)
      }
     
    }
  }

  find(data) {
   return recursiveFind(this.mainRoot, data)
    
    function recursiveFind(node, data) {
      if (!node) {
        return null
      } if (node.data == data) {
        return node
      } if (data < node.data) {
        return recursiveFind(node.left, data)
      } if (data > node.data) {
        return recursiveFind(node.right, data)
      }
    }
  }

  remove(data) {
  this.mainRoot = recursiveRemove(this.mainRoot, data)
    function recursiveRemove(node, data) {
      if (!node) {
        return false
      } if (data < node.data) {
        node.left = recursiveRemove(node.left, data)
        return node
      } if (data > node.data) {
        node.right = recursiveRemove(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        } if (!node.left) {
          node = node.right
          return node
        } if (!node.right) {
          node = node.left
          return node
        } 

        let maxFromLeft = node.left
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data
        node.left = recursiveRemove(node.left, maxFromLeft.data)
        return node
      }
    }
  }

  min() {
  let node = this.mainRoot
    if(!node.left) {
      return node.data
    } else {
    while (node.left) {
      node = node.left
  } 
    return node.data
  }
  }
  max() {
   let node = this.mainRoot
    if(!node.right) {
      return node.data
    } else {
      while(node.right) {
        node = node.right
      }
      return node.data
    }
  }
}

module.exports = {
  BinarySearchTree
};
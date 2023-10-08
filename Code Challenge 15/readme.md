# Tree
 
 * Create a Binary Tree class
Define a method for each of the depth first traversals:
pre order
in order
post order

* Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
Add
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
Contains
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

 ## Whiteboard process

[UML](Code_Challenge15.png)

 ## Approach & Efficiency

* Tried to apply what I learned on Friday during lecture. 

 ## Solution

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrderTraversal(node = this.root) {
        const result = [];
        if (node !== null) {
            result.push(node.value);
            result.push(...this.preOrderTraversal(node.left));
            result.push(...this.preOrderTraversal(node.right));
        }
        return result;
    }

    inOrderTraversal(node = this.root) {
        const result = [];
        if (node !== null) {
            result.push(...this.inOrderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inOrderTraversal(node.right));
        }
        return result;
    }

    postOrderTraversal(node = this.root) {
        const result = [];
        if (node !== null) {
            result.push(...this.postOrderTraversal(node.left));
            result.push(...this.postOrderTraversal(node.right));
            result.push(node.value);
        }
        return result;
    }
}

class BinarySearchTree extends BinaryTree {
    constructor() {
        super();
    }

    add(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    contains(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (value === currentNode.value) {
                return true; // Value found
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false; 
    }
}

### Resources

*Stackoverflow
*ChatGPT 3.5
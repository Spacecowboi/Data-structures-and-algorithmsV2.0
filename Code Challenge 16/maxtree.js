'use strict';

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    findMax() {
      if (!this.root) {
        return null;
      }
  
      return this.findTheMax(this.root);
    }
  
    findTheMax(node) {
      if (!node) {
        return null;
      }
      let max = node.value;

      const leftMax = this.findTheMax(node.left);
      const rightMax = this.findTheMax(node.right);
  
      if (leftMax !== null && leftMax > max) {
        max = leftMax;
      }
      if (rightMax !== null && rightMax > max) {
        max = rightMax;
      }
  
      return max;
    }
  }
  
  let root = new TreeNode(1);
  let nineNode = new TreeNode(9);
  let threeNode = new TreeNode(3);
  let fiveNode = new TreeNode(5);
  let eightNode = new TreeNode(8);
  let twentyNode = new TreeNode(20);
  let elevenNode = new TreeNode(11);
  let sevenNode = new TreeNode(7);
  let secondTwoNode = new TreeNode(2);
  
  root.left = nineNode;
  root.right = threeNode;
  nineNode.left = fiveNode;
  nineNode.right = eightNode;
  threeNode.left = twentyNode;
  threeNode.right = elevenNode;
  fiveNode.left = secondFiveNode;
  fiveNode.right = secondTwoNode;
  
  const tree = new BinaryTree();
  tree.root = root;
  const max = tree.findMax();
  console.log("Maximum value in the tree:", max); 
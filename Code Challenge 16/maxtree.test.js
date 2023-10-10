const BinaryTree = require('./maxtree.js');

describe('BinaryTree', () => {
    test('findMax returns the maximum value in the tree', () => {
        let root = new TreeNode(1);
        let nineNode = new TreeNode(9);
        let threeNode = new TreeNode(3);
        let fiveNode = new TreeNode(5);
        let eightNode = new TreeNode(8);
        let twentyNode = new TreeNode(20);
        let elevenNode = new TreeNode(11);
        let secondFiveNode = new TreeNode(5);
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

        expect(max).toBe(20);
    });
});

//test written with help from ChatGPT 3.5
// creating a binary tree

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// Initialize and allocate memory for tree nodes
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

// Connect binary tree nodes
firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;

console.log(firstNode)
console.log(secondNode)
console.log(thirdNode)
console.log(fourthNode)

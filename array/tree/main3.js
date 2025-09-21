// Postorder Traversal of Binary Tree
// Postorder traversal is a tree traversal method that follows the Left-Right-Root order:

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function printPostorder(node) {
    if (node == null) {
        return;
    }
    // First recur on left subtree
    printPostorder(node.left);
    // Then recur on right subtree
    printPostorder(node.right);
    // Now deal with the node
    console.log(node.data + " ");
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7)

printPostorder(root);

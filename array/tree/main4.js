// Inorder Traversal of Binary Tree
// Inorder traversal is a depth-first traversal method that follows this sequence:

// Left subtree is visited first.
// Root node is processed next.
// Right subtree is visited last.

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function printInorder(node) {
    if (node === null) {
        return;
    }
    // First recur on left subtree
    printInorder(node.left);
    // Now deal with the node
    console.log(node.data);
    // Then recur on right subtree
    printInorder(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7);

printInorder(root);
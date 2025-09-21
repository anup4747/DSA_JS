// Preorder Traversal of Binary Tree
// Preorder traversal is a tree traversal method that follows the Root-Left-Right order

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function printPreorder(node){
    if (node === null){
        return;
    } 

    console.log(node.data);
    printPreorder(node.left);
    printPreorder(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.right.left = new Node(7);


printPreorder(root)
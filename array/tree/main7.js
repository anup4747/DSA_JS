// binary tree node deletion 

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

function delNode(root, x) {
    if (root === null) {
        return root;
    }
    if (root.data > x) {
        root.left = delNode(root.left, x);

    } else if (root.data < x) {
        root.right = delNode(root.right, x);
    } else {
        if (root.left === null)
            return root.right;

        if (root.right === null)
            return root.left;

        let succ = getSuccessor(root);
        root.data = succ.data;
        root.right = delNode(root.right, succ.data);

    }
    return root;
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(12);
root.right.right = new Node(18);
root = delNode(root, 15);
console.log(root);
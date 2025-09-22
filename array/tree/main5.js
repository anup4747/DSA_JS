class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function searchNode(root, value) {

    if (root === null){
        return false;
    }

    if (root.data === value){
        return true
    }

    if (root.data < value){
        return searchNode(root.right, value);
    }

    return searchNode(root.left, value);
}

const root = new Node(50);
root.left = new Node(30);
root.right = new Node(70);
root.left.left = new Node(20);
root.left.right = new Node(40);
root.right.left = new Node(60);
root.right.right = new Node(80);

console.log(searchNode(root, 40));


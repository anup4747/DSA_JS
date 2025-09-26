//  find minimum and Maximum Value in Binary Search Tree

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function findMin(curr) {
    if (!curr) {
        return null;
    }
    if (!curr.left) {
        return curr.data;
    }
    return findMin(curr.left);
}

function findMax(curr) {
    if (!curr) {
        return null;
    }
    if (!curr.right) {
        return curr.data;
    }
    return findMax(curr.right);
}

let root = new Node(20);
root.left = new Node(10);
root.right = new Node(30);
root.left.left = new Node(5);
root.left.right = new Node(11);
root.right.left = new Node(23);
root.right.right = new Node(40);
// console.log(root);
console.log(findMin(root))
console.log(findMax(root))

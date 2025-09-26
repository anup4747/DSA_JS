// Breadth first Search

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function bfsTransversing(curr) {
    let queue = [];
    let result = []; // To store the traversal order
    if (!curr) return result; // Handle empty tree case
    queue.push(curr); // Push the root node to the queue

    while (queue.length) {
        let current = queue.shift(); // Dequeue the front node
        result.push(current.data); // Store the node's data in result
        // console.log(current.data); 
        // Enqueue left child if it exists
        if (current.left) {
            queue.push(current.left);
        }
        // Enqueue right child if it exists
        if (current.right) {
            queue.push(current.right);
        }
    }
    return result; // Return the traversal result
}


let root = new Node(20);
root.left = new Node(10);
root.right = new Node(30);
root.left.left = new Node(5);
root.left.right = new Node(11);
root.right.left = new Node(23);
root.right.right = new Node(40);
console.log(root);
console.log(bfsTransversing(root))
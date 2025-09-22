// Binary tree insertion ...

class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function insert(root, value) {
    if (root === null){
        return new Node(value);
    } 

    if (root.data === value){
        return root;
    }

    if(value < root.data){
        root.left = insert(root.left, value);
    } else if (value > root.data){
        root.right = insert(root.right, value);
    }

    return root;
}

function inorder(root){
    if (root !== null){
        inorder(root.left);
        console.log(root.data + " ");
        inorder(root.right)
    }
}

let root = new Node(50);
root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

console.log(root)



class List {
    constructor() {
        this.head = {
            value: "",
            next: null,
        }
        this.tail = this.head;
    }

    appendNode(nodeData){
        let newNode = {
            value: nodeData,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size+=1
    }
}

let node = new List();
node.appendNode(300)
node.appendNode(400)
node.appendNode(500)

console.log(node)
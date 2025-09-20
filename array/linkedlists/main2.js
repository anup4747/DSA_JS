// tanversing Linked list

class List {
    constructor() {
        this.head = {
            value: "",
            next: null,
        }
        this.tail = this.head;
        this.size = 0 ;
    }

    appendNode(nodeData){
        let newNode = {
            value: nodeData,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size += 1
    }

    traversing(){
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size){
            console.log(currentNode);
            currentNode=currentNode.next;
            counter++;
            // if (counter == 3){
            //     currentNode.value = 999;
            // }
        }
    }
}

let node = new List();
node.appendNode(300)
node.appendNode(400)
node.appendNode(500)
node.appendNode(600)
node.appendNode(700)
node.appendNode(800)
node.appendNode(900)


console.log(node)
console.log(node.traversing())

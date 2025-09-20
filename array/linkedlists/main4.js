// searching Linked list node

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

    deleteNode(pos){
        let counter = 1;
        let lead = this.head;
        if(pos === 1){
            this.head = this.head.next;
        }else {
            while(counter< pos-1){
                lead = lead.next;
                counter++
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            console.log(lead)
        }
    }

    searchNode(pos){
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size){
            if (counter === pos){
                console.log(currentNode);
            } 
            currentNode=currentNode.next;
            counter++;
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
// console.log(node)
node.searchNode(3)
// console.log(node.traversing())
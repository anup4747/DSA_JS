class Queue{
    constructor(size){
        this.max = size; 
        this.items = new Array(size);
        this.currentSize = 0;
        this.rear = -1;
        this.front = -1;

    }

    enqueue(val){
        if (this.currentSize <= this.max){
            this.rear++;
            this.items[this.rear] = val;
            this.currentSize++
        } else {
            console.log("Queue is full")
        }
    }

    dequeue(){
        if (this.currentSize <= this.max && this.currentSize > -1 ){
            this.rear--;
            this.items.pop()
            this.currentSize--;
        } else {
            console.log("Queue is empty already")
        }
    }
}

let queue = new Queue(5);




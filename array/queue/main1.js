// In Data structure, a queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, meaning the first element added is the first one removed. It operates like a real-world queue, such as people waiting in line, where new items are added to the rear (enqueue) and removed from the front (dequeue). Queues are implemented using arrays or linked lists and are widely used in task scheduling, breadth-first search algorithms, and handling asynchronous operations. Basic operations include enqueue, dequeue, peek (view the front element), and checking if the queue is empty, making it efficient for processing items in the order they arrive.
// alt + z

let queue = [] 
let currentSize = queue.length;
let maxSize = 5

function enqueue(newVal){
    if(currentSize > maxSize - 1){
        console.log("Queue is full")
    }else{
        queue[currentSize] = newVal;
        currentSize++;
    }
}

function display(){
    console.log(queue);
}

function dequeue(){
    if (currentSize > 0){
        queue.pop();
    } else {
        console.log("the queue is already empty")
    }
}


dequeue();  // removal of last element
enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60); // additional element in queue
display();
dequeue();  // removal of last element
display();
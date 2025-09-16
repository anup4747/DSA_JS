// classes and stack in the js

class stack{
    
    item = [];
    currentSize;
    maxSize;

    constructor(size){
        console.log("slls")
        this.maxSize=size;
        this.currentSize=this.item.length;
    }
    push(newVal){
        if(this.currentSize >= this.maxSize){
            console.log("stack is full")
        }else {
            this.item[this.currentSize] = newVal;
            this.currentSize++;
            console.log("pushed")
        }
    }

    pop(){
        if(this.currentSize > 0 ){
            this.currentSize--;
            this.item.length = this.currentSize;
        }else {
            console.log("Stack is already empty")
        }
    }
    display(){
        console.log(this.item)
    }
}

stk = new stack(5);
stk.push(20) 
stk.pop()
stk.push(30) 
stk.push(40) 
stk.display()
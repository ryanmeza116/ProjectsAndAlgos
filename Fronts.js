// Add Front 
class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    addFront(value) {
        let newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this 
    } 
removeFront() {
    if(this.head == null){
        return this.head;
    }
    let removedNode = this.head
    this.head = removedNode.next;
    removedNode.next = null;
    return this.head;

}

front() {
    if (this.head == null) {
        return null;
    } else {
        return this.head.value;
    }
}

display() {
    const listStr = "";
    if(this.head == null) {
        return listStr;
    }
    listStr += this.head.value;

    let runner = this.head.next;
    while(runner != null) {
        listStr += "," + runner.value;
        runner = runner.next;

    }
    return listStr;
}

}


const mySll = new SLL();

mySll.addFront(10);
mySll.addFront(5);
console.log(mySll);

// Remove front 


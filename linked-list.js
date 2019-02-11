//2.

class Node {
    constructor(value) {
    this.value = value;
    this.next = null;
    }
}

class LinkedList {
    constructor() {
    this.head = null;
    this.value = null;
    this.length = 0;
    }
}

LinkedList.prototype.deleteDubs = function() {
	let current = this.head;
	while(current) {
		let runner = current;
		while(runner.next) {
			if(runner.next.value === current.value) {
				runner.next = runner.next.value;
            } else {
				runner = runner.next;
            }
        }
		current = current.next;
    }
	
}



LinkedList.prototype.find =function(item) {
    let currNode = this.head;
    while (currNode.value != item) {
        currNode = currNode.next;
    }
    return currNode;
}

LinkedList.prototype.add = function(value) {
    let newNode = new Node(value);
    let current = this.head;
    if(!current) {
        this.head = newNode;
        this.length++;
        return newNode;
    }
    while(current.next) {
        current = current.next;
    }
    current.next = newNode;
    this.length++;
    return newNode;
}


let ll = new LinkedList();
ll.add("a");
ll.add("c");
ll.add("d");
ll.add("d");
ll.add("a");

ll.deleteDubs();

console.log(ll);

//3. 
function reverse(head) {
    if (!head || !head.next) {
        return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined; 
    return tmp;
}
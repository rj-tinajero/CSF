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

LinkedList.prototype.print = function() {
    let curr = this.head;
    let res = "";
    while (curr) {
      res += curr.value + "-> ";
      curr = curr.next;
    }
    console.log(res);
  }

LinkedList.prototype.deleteDubs = function() {
	let current = this.head;
	while(current) {
		let runner = current.next;
        let previous = current;
		while(runner) {
			if(runner.value === current.value) {
                previous.next = runner.next; 
            } else {
                previous = previous.next;
            }
            runner = runner.next;
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

ll.print();

ll.deleteDubs();


//3. 
LinkedList.prototype.reverse = function() {
    function rev(curr, prev) {    
      if (curr === null)
        return prev;
      
      let temp = curr.next;
      curr.next = prev;
      return rev(temp, curr);
    }
    
    this.head = rev(this.head, null);
  }
  
ll.add("a");
ll.add("c");
ll.add("d");
ll.add("d");
ll.add("a");

ll.reverse();
ll;
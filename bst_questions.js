// 1 searching
// WOuld create the tree by inserting in the values. Then would make a find function to go down the tree using if statements.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
        let current = this.root;
        while(true) {
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                    } 
                    current = current.left;
                } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } 
                    current = current.right;
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current; 
    }

}

let tree = new BST();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

tree.find(10);
tree.find(23); 



//2 distance bw nodes

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        } 
        let current = this.root;
        while(true) {
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                    } 
                    current = current.left;
                } else {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } 
                    current = current.right;
            }
        }
    }

    find(value) {
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        let count = 0;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
                count++; 
            } else if(value > current.value) {
                current = current.right;
                count++;
            } else {
                found = true;
                return count;
            }
        }
        if(!found) return undefined;
        return current; 
    }

}

let tree = new BST();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

tree.dist(1, 14);
tree.dist(8, 10);
tree.dist(4, 10);
// 1 searching
// Would create the tree by inserting in the values. Then would make a find function to go down the tree using if statements.
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
        if(!found) return false;
        return true; 
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

    find(n1, n2) {
        if(this.root === null) return false;
        let current = this.lca(n1, n2);
        let found = false;
        let count = 0;
        while(current && !found) {
            if(n1 < current.value) {
                current = current.left;
                count++;
            } else if(n1 > current.value) {
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

    find2(n1, n2) {
        if(this.root === null) return false;
        let current = this.lca(n1, n2);
        let found = false;
        let count = 0;
        while(current && !found) {
            if(n2 < current.value) {
                current = current.left;
                count++;
            } else if(n2 > current.value) {
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

    lca(n1, n2) {
        let current = this.root;
        if(current != null) {
            let found = 0;
            while(current != null) {
                if(current.value > n1 && current.value > n2) {
                    current = current.left;
                } else if (current.value < n1 && current.value < n2) {
                    current = current.right
                } else {
                    found = 1;
                    break;
                }
            }
            if(found && current) {
                return current;
            }
        }
        
    }


    dist(n1, n2) {
        return this.find(n1, n2) + this.find2(n1, n2);
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

tree.dist(10, 14);
tree.dist(4, 7);


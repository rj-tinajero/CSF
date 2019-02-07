
//6 Customer Database
class HashTable {
    constructor(size=50) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
    let total = 0;
	let newKey = key.toString();
        for (let i = 0; i < newKey.length; i++) {
            let char = newKey[i];
            let value = char.charCodeAt(0) 
            total = Math.abs((total + value) % this.keyMap.length);
        }
        return total;
    }   

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1] 
                }
            } 
        } 
        return undefined;
    }

    keys(){
        let newArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; i < this.keyMap[i].length; j++) {
                    if(!newArr.includes(this.keyMap[i][j][0])) { 
                        newArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return newArr;
    }

    values() {
        let newArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; i < this.keyMap[i].length; j++) {
                    if(!newArr.includes(this.keyMap[i][j][1])) {
                        newArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return newArr;
    }
}

let customers = new HashTable();
customers.set(9096975705, {name: "Richard Tinajero", address: "15555 Fake Lane", phoneNumber: 9096975705}); 
customers.get(9096975705);

//7 Store inventory
class SecondHashTable {
    constructor(size=100) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0);
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }   

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1] 
                }
            } 
        } 
        return undefined;
        

    }

    keys(){
        let newArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; i < this.keyMap[i].length; j++) {
                    if(!newArr.includes(this.keyMap[i][j][0])) { 
                        newArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return newArr;
    }

    values() {
        let newArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; i < this.keyMap[i].length; j++) {
                    if(!newArr.includes(this.keyMap[i][j][1])) {
                        newArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return newArr;
    }
}

let store = new SecondHashTable();
store.set("Adidas Boost", {name: "Adidas Boost", qty: 46, supplier: "Adidas"});
store.get("Adidas Boost");

//8 newspaper files 
class HashTable {
    constructor(size=100) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let newKey = key.toString();
            for (let i = 0; i < newKey.length; i++) {
                let char = newKey[i];
                let value = char.charCodeAt(0); 
                total = Math.abs((total + value) % this.keyMap.length);
            }
            return total;
    }   

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1] 
                }
            } 
        } 
        return undefined;
        

    }

    keys(){
        let newArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; i < this.keyMap[i].length; j++) {
                    if(!newArr.includes(this.keyMap[i][j][0])) { 
                        newArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return newArr;
    }

    values() {
        let newArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; i < this.keyMap[i].length; j++) {
                    if(!newArr.includes(this.keyMap[i][j][1])) {
                        newArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return newArr;
    }
}

let sortByDate = new HashTable();
let sortByPub = new HashTable();
sortByDate.set(20190206, {publisher: "ny times", pubDate: 20190206, file: "20190206_nytimes.pdf"});
sortByPub.set("nytimes", {publisher: "ny times", pubDate: 20190206, file: "20190206_nytimes.pdf"});

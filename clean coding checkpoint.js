//Number 6
function sumRoot(arr) {
    let newArr = arr.reduce((total, item) => total + item);
    if (Math.sqrt(newArr) % 1 === 0) {
        return Math.sqrt(newArr)
    } else {
        return newArr;
    }
}

//Number 7
function duplicateCheck(arr) {
    for(let i = 0; i <= arr.length; i++) {
        for(let j = i; j <= arr.length; j++) {
            if(i != j && arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
}
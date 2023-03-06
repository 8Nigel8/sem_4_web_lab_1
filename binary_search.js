function binarySearch(value, list) {
    let first = 0;    //left endpoint 
    let last = list.length - 1;   //right endpoint 
    let position = -1;
    let found = false;
    let middle;
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {  //if in lower half 
            last = middle - 1;
        } else {  //in in upper half 
            first = middle + 1;
        }
    }
    return position;
}

let list = [1,2,4,5,6,7,8,9,11,32]
console.log(binarySearch(8,list))
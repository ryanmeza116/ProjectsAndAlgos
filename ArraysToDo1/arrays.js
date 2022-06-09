// push front 
function pushFront(arr, val) {
    for(let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i-1]
    }
    arr[0] = val 
    return arr
}
console.log(pushFront([99], 7))

// pop front 
function popFront(arr) {
    let firstValue = arr[0]
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length -1 
    console.log(arr)
    return firstValue
}

//insert at 
function insertAt(arr,index,value) {
    for(let i = arr.length; i >= index; i--) {
        arr[i] = arr[i-1]
    }
    arr[index] = value 
    return arr
}
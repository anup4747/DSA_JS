// Reverse array with recursion 

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp = 0

function customRevrse(data, start, end) {
    // console.log(data)
    if (start <= end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp
        customRevrse(data, start + 1 , end - 1)
    }
}

customRevrse(data, 0, data.length-1)
console.log(data)
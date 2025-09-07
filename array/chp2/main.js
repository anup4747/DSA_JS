// let data = [1,2,3,4,5,6,7,8,9]

// console.log("Our array ", data)
// console.log("pushing the 10 in the array")
// data.push(10)
// console.log("after pushing " ,data)
let data = [10, 20, 40, 50, 60, 70, 80];
let newEl = 30;
let position = 2;
let length = data.length;

console.log(data)
// Shift elements to the right, starting from the end
for (let i = length - 1; i >= position; i--) {
  data[i + 1] = data[i];
}

// Insert the new element at the specified position
data[position] = newEl;

console.log(data);

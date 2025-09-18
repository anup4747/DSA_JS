// implementation of linear search

let data = [30,13,45,75,2,9,5,50]
let find = 9
let position = undefined;

for (let i = 0; i < data.length; i++){
    if (data[i] == find){
        position = i
        break;
    } 

    if (position == undefined && i == data.length - 1){
        position = "Element not found in array"
    }
}

console.log(position)
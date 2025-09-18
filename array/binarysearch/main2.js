// implementation of binary search in recursive method

let data = [2,4,6,8,10,12,14,16,18,20];
let find = 14;
let start = 0;
let end = data.length - 1;
let position = undefined;


function find_pos(data, start, end) {
    let mid = Math.floor((start + end) / 2)

    if (data[mid] == find) {
        position = mid;
    } else if (data[mid] < find) {
        find_pos(data, start + 1, end)
    } else if (data[mid] > find) {
        find_pos(data, start - 1, end)
    } else {
       find_pos(data, start, end - 1)
    }
    return position;
}


console.log(find_pos(data, start, end))
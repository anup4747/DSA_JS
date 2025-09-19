// implementation of binary search

let data = [5, 9, 13, 17];
let find = 17;
let start = 0;
let end = data.length - 1;
let position = undefined;

function find_mid(start, end) {
    let mid = Math.floor((start + end) / 2)
    return mid
}

function find_pos(data, start, end) {
    while (start <= end) {
        mid = find_mid(start, end)
        if (data[mid] == find) {
            position = mid;
            return position;
        } else if (data[mid] < find) {
            start = mid + 1;
        } else if (data[mid] > find) {
            start = mid - 1;
        } else {
            end = mid - 1;
        }
    }
    return "element not found";
}

console.log(find_pos(data, start, end))
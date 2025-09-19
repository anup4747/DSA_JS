// check plaindrom

function check_palindrom(data) {
    let start = 0;
    let result = true;
    let end = data.length - 1;
    while (end > start) {
        if (data[start] !== data[end]) {
            result = false;
        }
        start++;
        end--;

    }

    return result;
}

console.log(check_palindrom("level"))
console.log(check_palindrom("anup"))

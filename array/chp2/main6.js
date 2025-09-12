// array sorting using bubble sorting

let data1 = [40,30,12,25]
let sorted_list = []
let temp_num = 0

for (let i = 0; i < data1.length * data1.length; i++) {
    // console.log(i)
    for (let j = 0; j < data1.length; j++) {
        if (data1[j] > data1[j + 1]) {
            temp_num = data1[j+1]
            data1[j+1] = data1[j]
            data1[j] = temp_num
        }
    }
}

for (let i = 0; i < data1.length; i++) {
    sorted_list[i] = data1[i]
}

console.log(sorted_list)

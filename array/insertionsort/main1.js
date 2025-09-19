// Insertion sorting algorithm

let data = [12,11,13,5,6]

for (let i = 0 ; i < data.length; i++){
    for (let j = 0 ; j < data.length; j++){
        if (data[j+1] < data[j]){
            let temp = data[j]
            data[j] = data[j+1]
            data[j+1] = temp
        }
    }
}

console.log(data)

//  or

let arr = [12,11,13,5,6]

function insertionSort(data){
    let i, current, j;
    for (i = 1; i < data.length ; i++){
        current = data[i];
        j = i - 1; 
        while(j >= 0 && data[j] > current) {
            data[j+1] = data[j];
            j=j-1;
        }
        data[j+1] = current
    }
}
insertionSort(arr)
console.log(arr)
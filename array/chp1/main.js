let data = [1, 2, 3, 4, 5, 6, 7, 8];

// printing all the elements
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

// while loop
let i = 0;
let condition = true
while (condition){
    if (data[i] !== undefined){
        console.log(data[i])
        i++;
    } else {
        condition = false
    }
}

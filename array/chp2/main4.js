// using for loop

let data1 = [10,20,30,40,50]
let data2 = [60,70,80,90,100]
let data3 = []

for (let i = 0 ; i < data1.length ; i++){
    data3[i] = data1[i]
}

for (let i = 0 ; i < data2.length ; i++ ){
    data3[i + data2.length] = data2[i]
}

console.log(data3)

// using while loot
data3 = [] 
let d1 = 0
let d2 = 0
let d3 = 0
let con = false;

while (d3 <  data1.length + data2.length) {
    if (d1 < data1.length){
        data3[d3] = data1[d1];
        d1++;
    } else {
        con = true;
    }

    if (con){
        data3[d3] = data2[d2]
        d2++;
    }
    d3++;
}


console.log(data3)

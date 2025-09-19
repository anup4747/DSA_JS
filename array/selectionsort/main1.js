// selection sorting algo

let data = [20,12,53,3]

for (let i = 0 ; i < data.length; i++){
    for (let j = 0; j < data.length; j++ ){
        if (data[j] > data[i] ){
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}  

console.log(data)
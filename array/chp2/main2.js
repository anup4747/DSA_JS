let data = [10,20,30,40,50,60,70,80,90,100];
let position = 2;

for (let i = 0 ; i <= data.length-1 ; i++){
    if (i >= position){
        data[i] = data[i+1] 
        if (i == data.length-1){
            data.pop()
        }
    }
}

console.log(data)
let data = [10,20,30,40,50,60,70,80,90,100];
let position = undefined;
let search = 40

for (let i = 0 ; i <= data.length-1 ; i++){
    if (data[i] == search){
        position = i;
        break; 
    }
}

console.log(data.indexOf(search))
console.log(position)
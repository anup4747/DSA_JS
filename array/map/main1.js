// implementation of map function

let data = new Map([
    ["name" , "anup"],
    ["age" , 20],
    ["virgin", true]
])

data.set("single", true)
console.log(data)
// console.log(data.size)
// console.log(data.has("virgin"))
// console.log(data.get("virgin"))
// data.clear()
// console.log(data)

for (let x of data){
    console.log(x)
}

data.forEach((val,key) => {
    console.log(val,key)
});
// implementation of set

let data = new Set(["anil", "anup", "anil","ben 10", "optimus"]);
data.add("iron man")

console.log(data)
console.log(data.has("anup"))
console.log(data.size)
// data.clear()
// console.log(data)
data.delete("anil")
console.log(data)
console.log(data.entries())

data.forEach((elements) => {
    console.log(elements)
});

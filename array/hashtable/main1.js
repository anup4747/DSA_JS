// basic hash table
let data = {
    name: 'anup',
    age: 28,
    mail: 'anupakljsbfaljsbf@gmail.com',
    getName:function(){
        return this.name;
    }
}

data.contact = "0123456789"
data.name = "puna"

console.log(data)

for (x in data){
    console.log(data[x])
}
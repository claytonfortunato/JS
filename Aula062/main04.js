// for...in
// repetição em Objeto

let person = {
    name: 'John',
    age: 33,
    weight: 88.9
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
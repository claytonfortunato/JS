/*
    Function() construtor

    * expressão new
    * criar um novo objeto
    * this keyword
    
    Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:
*/

let date = new Date("2022-10-06")

console.log(date)

function Person() {
    this.name = name
    this.walk = function() {
        return this.name + " está andando "
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk())
console.log(joao.walk())
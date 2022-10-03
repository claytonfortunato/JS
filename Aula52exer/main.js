// 1. Declare uma variável de nome weight
let weight
// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)
/* 
    3.Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Booleaan
*/
name: 'John',
age: 5,
stars: 6.6,
isSubscribed: True

/*
    4. A variável student aabaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedaades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos vaaalores de cada propriedade do objeto
*/

let student = {
    name: "John",
    age: 5,
    stars: 6.6,
    isSubscribed: True
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5.Declare uma variável do tipo Array, de nome students e atribua a ela
    nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
    6.Reatribua valor paara a variável acima, colocando dentro dela o objeto student da questãao 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)
/*
    7.Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
    name: "John",
    age: 23,
    weight: 74.8,
    isSubscribed: true,
}

students[1] = john

/*
    9.Sem rodar o código responda qual é a resposta do código abaixo e por que?Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/
// R:underfined
console.log(a)
    var a = 1



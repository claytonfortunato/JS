// Manipulando Strings e Arrays

// Separe um texto que contem espaços, em um novo array onde cada texte é uma poisoção de array.Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
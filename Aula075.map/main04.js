// Exemplo 4 Neste quarto exemplo veremos como usar o recurso de arrow functions, do ECMAScript 6, 
//para definir a função de callback com uma sintaxe mais simples
const quadrados = [25, 16, 9, 4, 1];

const raizes = quadrados.map(numero => Math.sqrt(numero));

console.log(raizes);
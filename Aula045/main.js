/* ARRAYS
Os arrays JavaScript são usados para armazenar vários valores em uma única variável.Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades.O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão","leite"];

A lista [0] (lista na posição 0) vai conter o valor "arroz".
A lista [1] (lista na posição 1) vai conter o valor "feijão".

*/

var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";


const numeros = [40, 100, 1, 5, 25, 10];

document.getElementById("teste").innerHTML = MaiorNumero(numeros);

function MaiorNumero(array) {
    return Math.max.apply(null, array); //Pegar maior número
}

function MenorNumero(array) {
    return Math.min.apply(null, array); //Pegar menor número
}
var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

document.getElementById("teste").innerHTML = maior20;

function filtragem(value, index, array) {
    return value > 20;
}
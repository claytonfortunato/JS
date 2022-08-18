/* FUNÇÕES
Uma função JavaScript é um bloco de código projatado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função JavaScript é executado quando "algo" a invoca (chama-a).
*/ 

//FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}

// FUNÇÃO DE COTAÇÃO DO DOLAR
function relaParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.19;

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " + valorReal + "o valor em dólar U$ é: " + total);
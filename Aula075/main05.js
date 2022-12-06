// Este exemplo usa novamente uma arrow function como função de callback, 
//mas dessa vez ela recebe também o índice do item:
const copas = [1958, 1962, 1970, 1994, 2002];

var titulos = copas.map((ano,indice) => `${indice + 1} : ${ano}`);

console.log(titulos.join("<br>"));
const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

//Retorna uma array nova, que contem os items em
//que o retorno da função for verdadeiro
const precosFiltro = precos.filter(preco => preco.includes("R$"));
// como só retorna um item unico, dessa forma fica simplificada.

console.log(precosFiltro)
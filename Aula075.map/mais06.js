const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

const precosFiltro = precos.filter(preco => preco.includes("R$"));
// Retorna uma nova array, modificada com o
// retorno de cada item da função
const precosNumeros = precosFiltro.map(preco => 
    Number(preco.replace("R$ ", ""))
);

console.log(precosNumeros)
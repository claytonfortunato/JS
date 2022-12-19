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

const precoNumeros = precosFiltro.map(preco =>
    Number(preco.replace("R$ ", ""))
  );
//Retorna um valor um único, o valor retornando
// fica disponível na proxima iteração através do
// primeiro argumento, por isso o nome acumulator
const total = precoNumeros.reduce((acc,item) => acc + item);

console.log(total);
// O uqe é Array.
const latinhas = ["Koka-kola", "Esprite"];

latinhas.push("colecao-especial")

const latinhasNaoEsprite = latinhas.filter(latinha => {
    return latinha !== "Esprite";
})

const latinhaKoka = latinhas.find(function(latinha) {
    return latinha !== "Koka-kola";
})

const found = latinhas.includes("colecao-especial", 3);

const novasLatinhas = [...latinhas, "Tubaina"] //Spread

const latinhasAtualizadas = novasLatinhas.slice(-2);

latinhas.pop();
console.log(latinhas);

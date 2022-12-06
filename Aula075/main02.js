const vencedores = [
    {
        nome: "Equipe Super",
        pais : "Brasil"
    },
    {
        nome: "Time Maximo",
        pais: "EUA"
    },
    {
        nome: "Mega Grupo",
        pais: "Canadá"
    }
];

// const podioPorPais = vencedores.map(function(item, indice) {
    // return item.pais;
// });

const podioPorPais = vencedores.map(function(item, indice) {
    return `<tr>
                <th>${indice + 1}</th>
                <th>${item.nome}</th>
                <th>${item.pais}</th>
            </tr>`;
});

document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("");
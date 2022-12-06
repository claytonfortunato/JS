const produtos = [
    {id: 1, descrição: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descrição: "Notebook", categoria: "Eletrônico"},
    {id: 3, descrição: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descrição: "Liquificador", categoria: "Etrodoméstico"},
    {id: 5, descrição: "Fogão", categoria: "Etrodoméstico"}
];

function retornaEletronico (value) {
    if (value.categoria == "Eletrônico")
    return value;
}

const produtosEletronicos = produtos.filter(retornaEletronico);
produtosEletronicos.forEach(produtoEletro => {
    console.log(produtoEletro);
});
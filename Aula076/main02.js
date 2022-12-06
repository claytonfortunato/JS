const estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte"
, "Santa Catarina", "Acre"];

const retornaEstado = estados.filter(function(value) {
    if (value.charAt(0) == "S")
    return value;
});

console.log(retornaEstado);
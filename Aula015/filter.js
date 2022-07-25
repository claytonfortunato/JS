//o filter() em matrizes para percorrer uma matriz e retornar uma nova matriz com os elementos que passam pelas regras de filtragem.
//Usando junto com map.
var arr = [1, 2, 3, 4, 5];
var map = arr.map(function(item) {
    return item + 10;
}).filter(function(item) {
    return item > 13;
});

var filter = map.filter(function(item) {
    return item > 13;
});
console.log( map );

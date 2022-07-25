//use every() para testar se se tudo dentro de um array corresponde a um critério determinado.
var arr = [1, 2, 3, 4, 5, 6, 7];
var every = arr.every(function(item) {
    console.log( item );
    return item < 5;
});
console.log( every );
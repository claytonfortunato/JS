var arr = [ 'F', 'e', 'r', 'n', 'a', 'n', 'd', 'o' ];
var reduce = arr.reduceRight(function(acumulado, atual, index, array) {
    return acumulado + atual;
});

console.log( reduce );
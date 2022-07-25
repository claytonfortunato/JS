var arr = [ 1, 2, 3, 4, 5 ];
var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumulado + atual;
}, 0);
console.log( reduce );
/*
1 - 0 + 1 = 1
2 - 1 + 2 = 3
3 - 3 + 3 = 6
4 - 6 + 4 = 10
5 - 10 + 5 = 15
*/
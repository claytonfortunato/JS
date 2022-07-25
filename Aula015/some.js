//some() executa a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true. Se em qualquer dos elementos o valor for encontrado, some() imediatamente retorna true . Caso contrario, some() retorna false .
var arr = [1, 2, 3, 4, 5, 6, 7];
var some = arr.some(function(item) {
    return item % 2 === 0;
});
console.log( some );
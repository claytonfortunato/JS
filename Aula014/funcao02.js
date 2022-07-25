function subtract( num1, num2 ) {
    if( typeof num1 === 'object') {
        return 'Não entre com valores nulos!';
    }
    return num1 - num2;
}

console.log( subtract(10,5 ) );
console.log( subtract( null, 2 ) );
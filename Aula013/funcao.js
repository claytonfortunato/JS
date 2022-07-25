function adder(x) {
    return function(y) {
        return x + y;
    };
}

var add2 = adder(2);
console.log( add2(3) );
console.log( adder(5)(8) );
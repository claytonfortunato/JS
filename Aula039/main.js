(function() {
    'use strict';

    function isNumber (value) {
        console.log('DEBUGAR')
        return Object.prototype.toString.call(value) === '[object Number]';
    }

    isNumber(2);
    isNumber('fernando');

    var thisIsNumber = isNumber(5);
    alert(thisIsNumber);
})();
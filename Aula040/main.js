(function() {
    'use strict';

    var a = {
        prop: '1'
    };

    var b = {
        prop: '1'
    };

    b.prop2 = 2;

    window.b = b;

    console.log(a, b, a === b);
    
})();
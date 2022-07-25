(function() {
    'use strict'

    function sum() {
        //DEBUGGER, mostrando onde parou no debug.
        debugger;
        return Array.prototype.reduce.call(arguments, function(accumulated, item) {
            return accumulated + item;
        });
    }
    console.log( sum( 1, 21, 32, 4 ) );
    //DEBUG, breakpoints
})();
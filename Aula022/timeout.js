(function(win, doc) {
    'use strict';

    var counter = 0;
    function timer() {
        console.log( 'timer', counter++ );
        if( counter > 10 )
            return;
        setTimeout( timer, 1000);
    }
    timer();
})
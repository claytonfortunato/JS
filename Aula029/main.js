(function() {
    'use strict';

    var $main = document.querySelector('.main');
    //console.log( $main.getAttribute('data-number1') );
    //console.log(parseInt($main.getAttribute('data-number1'),10) + parseInt($main.getAttribute('data-number2'), 10) );
    console.log( $main.setAttribute('data-js', 'main-datajs') );
})();
(function() {
    'use strict';

    var $div = document.querySelector('[data-js="main"]');
    console.log($div.innerHTML); // getter
    //setter
    $div.innerHTML += '<h2>Título 2</h2>';
    
})();
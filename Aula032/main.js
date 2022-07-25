(function() {
    'use strict'

    var ajax = new XMLHttpRequest();
    ajax.open('GET', '');
    ajax.send();

    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function() {
        if( isRquestOk() ) {
            var data = JSON.parse(ajax.responseText);
            console.log('Requisição ok', data.message);
        }
    }, false)

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }
})();
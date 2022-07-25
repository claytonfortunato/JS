(function() {
    'use strict'

    var ajax = new XMLHttpRequest();
    ajax.open('GET', '')
    ajax.send();

    console.log('Carregando...');
    var response = '';
    ajax.addEventListener('readystatechange', function() {
        if( isRequestOk() ) {
            try {
                response = JSON.parse(ajax.responseText);
            }

            catch(e) {
                response = ajax.responseText;
            }
            console.log(response);
        }
    }, false)
})();
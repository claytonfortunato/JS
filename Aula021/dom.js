(function(win, doc) {
    'use strict';

    var $inputUsername = doc.querySelector( '#username' );
    var $inputPassword = doc.querySelector( '#password' );
    //$inputUsername.value = 'Fernando Daciuk';
    //$inputPassword.value = 'minhasenha';
    var $button = doc.querySelector( '#button' );

    $button.addEventListener( 'submit', function(event) {
        event.preventDefault();
        console.log( 'Click no botão' );
    }, false );

    document.addEventListener( 'click', function() {
        alert( 'Clicou no input' );
    }, false );
})(window,document);
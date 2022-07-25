(function(win) {
    'use strict';

    var del = confirm( 'Deseja realmente excluir?' )
    if( del )
        console.log( 'Excluido com sucesso!', del );
    else 
        console.log( 'Ação cancelada!', del );
})(window);
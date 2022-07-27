(function() {
    'use strict';

    var months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    var year = 2022;
    var month = 10;
    var day = 7;
    var hour = 10;
    var min = 10;
    var sec = 0;
    var milliseconds = 0;
    var date = new Date(year, month, day, hour, min, sec, milliseconds);
    console.log(date);
})();
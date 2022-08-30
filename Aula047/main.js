/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados.Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, miliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

 */

function ativarContagem() {
    //document.getElementById('tempo').innerHTML = "Começou a contar!";

    //EXECUTAR APENAS UMA VEZ APÓS O TEMPO DETERMINADO
    //setTimeout(function () {
    //    document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    //}, 5000);

    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            pararContagem();
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }
        
    }, 1000);
}

function pararContagem() {
    clearInterval(tempo);
    //document.getElementById('tempo').innerHTML = "Parou a contagem";
}
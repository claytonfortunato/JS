(function() {
    'use strict'

    

    var $formCEP = new DOM ('[data-js="form-cep"]');
    var $inputCEP = new DOM ('[data-js="input-cep"]');
    var $logradouro = new DOM ('[data-js="logradouro"]');
    var $bairro = new DOM ('[data-js="bairro"]');
    var $estado = new DOM ('[data-js="estado"]');
    var $cidade = new DOM ('[data-js="cidade"]');
    var $cep = new DOM ('[data-js="input-cep"]');
    var $status = new DOM('[data-js="status"]');
    var ajax = new XMLHttpRequest();
    $formCEP.on('submit', handleSubmitFormCEP);

    function handleSubmitFormCEP(event) {
        event.preventDefault();
        var url = getUrl();
        ajax.open('GET', url);
        ajax.send();
        ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function getUrl() {
        return replaceCEP(' viacep.com.br/ws/[CEP]/json/?callback=callback_name');
    }

    function clearCEP() {
        return $inputCEP.get()[0].value.replace(/\D/g, '');
    }

    function handleReadyStateChange() {
        if( isRequestOk() )
            fillCEPFields();
    }

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCEPFields() {
        var data = parse.Data();
        if(!data) {
            getMessage('error');
            clearData();
            return;
        }
            
        
        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $estado.get()[0].textContent = data.uf;
        $cidade.get()[0].textContent = data.localidade;
        $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
        return {
            logradouro: '-',
            bairro: '-',
            uf: '-',
            localidade: '-',
            cep: '-',
        }
    }

    function parseData() {
        var result;
        try {
            result = JSON.parse(ajax.responseText);
        }
        catch(e) {
            result = null;
        }
        return result;
    }

    function getMessage(type) {
        var messages = {
            loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
            ok: replaceCEP('Endereço referente ao CEP [CEP]:'),
            error: replaceCEP('Não encontramos o endereço para o CEP [CEP]')
        };
        $status.get()[0].textContent = messages[type];
    }

    function replaceCEP(message) {
        return message.replace('[CEP]', clearCEP());
    }

})(window,DOM);




window.onload = function () {
    sendSMS("Teste", "(ddd)999999999")
}

function sendSMS(message, number) {
    let APIkey = "544564";
    let BaseURL = "https://api.nvoip.com.br/v2/sms";

    let URL = BaseURL + "?napikey=" + APIkey;

    var headers = new Headers();
    headers.append("content-type", "application/json");

    var bodyParameters = {
        numberPhone: number,
        message: message,
        flashSms: false
    };

    var parameters = { method: 'POST', headers: headers, body: JSON.stringify(bodyParameters)};

    fetch(URL, parameters)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log(err);
    });
}
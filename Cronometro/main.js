var sec = 0;
var min = 0;
var hr = 0;

function twoDigits(digits) {
    if(digits < 10 ) {
        return "0" + digits;
    } else {
        return digits;
    }
}

function Iniciar() {
    interval = setInterval(tempo,10);
}

function Pause() {
    clearInterval(interval);
}

function Reset() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById('tempo').innerHTML = "00:00:00";
}

function tempo() {
    sec++
    if(sec == 60) {
        min++
        sec=0
    }
    if(min == 60) {
        hr++
        min=0
    }
    document.getElementById('tempo').innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':'+ twoDigits(sec);
}


function area(raio) {
    return Math.PI * raio * raio;
}

function circunferencia(raio) {
    return 2 * raio * Math.PI;
}

function aleatorio() {
    return NumeroAleatorio();
}

const Circulo = {
    area,
    circunferencia,
    aleatorio
}

export default Circulo;
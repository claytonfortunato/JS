/* MANIPULAR DATAS EM JAVASCRIPT */

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
//conlose.log(data);

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGAR O MES ATUAL - DE 0 ATÉ 11 SENDO 0 JANEIRO E 11 DEZEMBRO
let mes = data.getMonth();
console.log(mes);

//MOSTRAR O MES NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"]
let mesEscrito = mesesDoAno[data.getMonth()];

//PEGAR DIA DO MES - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

//PEGAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta",]
let diaSemanaEscrito = diasDaSemana[data.getDay()];

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();

//PEGAR A MINUTOSS - DE 0 ATÉ 59
let minutos = data.getMinutes();

//PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();

//PEGAR MILISEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos)

//PEGAR A DATA NO PADRAO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short' });
console.log(dataBR);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x; };

let dataPadraoBR = addZero(diaMes) + "/" + mes + "/" + ano;
console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2022, 0, 8);

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não venceu, tudo certo!");
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");
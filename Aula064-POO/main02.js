//Programação Estruturada x Orientação a Objetos

/** Programação Estrutura
    * Progressa a entrada e manipulação os dados, até a saida
    * Uso de sequências, estruturas de repetições e condições
    * Uso de uma rotina maior, ou sub-rotinas
    * Não existem restrições as variaveis
*/

/** Programação Orientada a Objetos
    * Surge para trazer um cuidado ao uso estruturado
    * Não elimina por completo o uso estruturado
    * Conceitos como Objetos e Classes
    * Cuidados com variáveis e rotinas(Encapsulamento)
    * Melhor reuso de código(Herança)
*/

// Estruturado
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

// POO
const job = new Job()
job.valorHoraa = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)
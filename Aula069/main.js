/** Promise
    A promessa de que algo irá acontecer
    Podera dar certo ou errado, mas irá acontecer.

    Uma promessa poderá ser:

    Pending: Estado inicial, assim que o objeto da promessa é iniciado
    Fulfilled: A promessa foi concluída com sucesso
    Rejected: A promessa foi rejeitada, houve um erro
    Settled: Seja com sucesso ou erro, ela foi finalmente concluída
*/

let aceitar = false

console.log('pedir uber')
const promessa = new Promise((resolve,reject) => {
    if (aceitar) {
        return resolve ('pedido aceito!')
    }
    
    return reject ('pedido negado!')
})

console.log('aguardando')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))
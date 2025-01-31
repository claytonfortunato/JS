/** Abstração
    Template ou identidade de uma classe que será construida no futuro

    * Atributos e métodos podem ser criados na classe de Abstração
    * A implementação dos métodos e atributos, só poderá ser feita na classe
    que irá herdar essa Abstração
*/

// definir
class Parafuso { // Superclasse - Abstrata
    constructor() {
        ir (this.constructor === Parafuso)
        throw new Error('Classe abstrata não pode ser instânciada')
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    construtor() { super() }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() }

    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {}

// criar e usar
new Parafuso() // ' Classe abstrata não pode ser instânciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // 'Método "get tipo()" precisa ser implementada'
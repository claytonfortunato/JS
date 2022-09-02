/** CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes.As classes são um conceito antigo em programação e várias linguagens utilizam elas.Mas no Javascript isso é relativamente novo, por isso mesmo programadores  esperientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no Javascript usam um método chamado construtor() para fabricar os objetos.
*/

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
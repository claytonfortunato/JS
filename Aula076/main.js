// Em primeiro lugar, declaramos a variável estados com cinco elementos com as iniciais variadas. A seguir, fizemos uma função chamada retornaEstado, que lê o primeiro caractere de cada elemento em busca da letra S.

// Perceba que para ler o primeiro caractere, utilizamos o método charAt(), que retorna o caractere de uma string, de acordo com o índice referenciado. No nosso exemplo, buscamos o índice 0, pois corresponde ao caractere inicial da string.

// O próximo passo é utilizar a função. Para isso, criamos a variável do tipo array chamada resultado para armazenar o retorno do método filter(). Então, aplicamos o método na array estados e chamamos a função retornaEstado, que retornará dois elementos: “São Paulo” e “Santa Catarina”.

// Assim como no exemplo anterior, podemos utilizar a arrow function para escrever esse código. Veja como ele fica ao utilizarmos essa opção, que terá o mesmo resultado.

const ages = [8, 13, 27, 30, 22, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0
});

console.log(evenAges);
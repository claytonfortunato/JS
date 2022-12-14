/*
criar um programa que gere. a partir de uma string,
um objeto onde cada propriedade é a primeira letra de cada palavra
e os seus valores é a quantidade de vezes que essas iniciais aparecem na frase

Ex: "voce gosta mais de estudar ou de macarrão?"
deve devolver o seguinte objeto:
{v: 1, g:1, m: 2, d: 2, e: 1, o: 1}

*/

const getCountWords = (str) => {
    if (!str || typeof str !== "string" || !str.trim()) return null;

    const strArr = str.trim().split(" ");
    
    return strArr.reduce( (obj, word) => {
        const firstLetter = word[0];
        if (obj[firstLetter]) {
            obj[firstLetter]++;
        } else {
            obj[firstLetter] = 1;
        }
        return obj;

    }, {} )
}

console.log(getCountWords("voce gosta mais de estudar ou de macarrão?"))
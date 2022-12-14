const getSmallestWord = (str) => {
    if(!str || typeof str !== "string") return null;

    const strArr = str.trim().split(" ");

    //["qual", "é", "a", "menor", "palavra"]
    return strArr.reduce( (menor, atual) => {
        if(atual.length < menor.length) {
            return atual
        }
        return menor
    })

    // let smallestWord = strArr[0];
    // for(let i = 1; i < strArr.length; i++) {
        // if(strArr[i].length < smallestWord.length) {
            // smallestWord = strArr[i];
        // }
    // }
    // return smallestWord;
}

console.log(getSmallestWord("qual é a menor palavra?"));
console.log(getSmallestWord("123 12 1234"));
console.log(getSmallestWord("12 123 1234"));
console.log(getSmallestWord("12 123 1234 1"));
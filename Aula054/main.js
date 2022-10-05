## var
''''js
// var é global e poderá funcionar fora de um esscopo de bloco
console.log('> exisste x antes do bloco? ', x)
{
    var x = 0
}

console.log('> existe x depoi do bloco? ', x)

## let e const
// consst e let são locai e só funcionam no escopo onde foi criada.

const y = 1;

{
    const y = 0
    console.log('> existe y ', y)
}

console.log('> existe y ddepois do bloco? ', y)
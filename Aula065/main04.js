/** First-class function

    Podem estar em qualquer lugar, inclusive, como parâmetro de outras
    funções
    A função podera ser estendida como uma variavel
 */

const sayMyName = () => console.log('Mayk')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))
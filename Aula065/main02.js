/** Imutabilidade
 
    Uma variavel não vai variar

    Se voce precisar mudar uma variavel, voce não muda, voce cria uma nova
*/ 

const cart = {
    quantity: 2,
    total: 200
}

//bad
cart.quantity = 3

//good
const newCart = {...cart, quantity: 3}

// Exemplo em ReactJS
const [amount, setAmount] = useState(0)

// bad
amount = 2

// good
setAmount(2)


// Objetos

const user = {
    name: 'Diego',
    idade: '27',
    address: {
        street: 'Rua teste',
        number: '176',
    },
};

document.body.innerText = JSON.stringify(Object.entries(user))
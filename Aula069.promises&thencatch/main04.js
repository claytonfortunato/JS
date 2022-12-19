// Promises e Then/catch

const userInfo = id => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(erro => {
        console.log("DEU ERRADO!!!")
    })
}

userInfo(3)
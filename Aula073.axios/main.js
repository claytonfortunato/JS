const url = "http://localhost:5500/api"

function getUsers() { // GET
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) { //POST
    axios.post(url)
        name: "Olivia Zars",
        avatar: "https://picsum.photos/200/300"
        city: "Rio de Janeiro"
        .then(response => {
            console.log(response)
        })
        .catch(error => console.error(error))
}

function getUser(id) { // GET com parametros
    axios.get(http://localhost:5500/api/1)
        .then(response => {
            userName.textContent = data.name
            userCity.textContent = response.data.city
            userID.textContent = response.data.id
            userAvatar.src = response.data.avatar
        })
        .catch(error => console.error(error))
}

function updateUser(id userUpdated) { //PUT
    axios.put(`${url}/${id}`,userUpdated)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

function deleteUser(id) { //DELETE
    axios.delete(`${url}/${id}`)
      .then(response => console.log(response))
      .catch(error => console.error(error))
}

const userUpdated = {
    name: "Marcelo Calvis",
    avatar: "",
    city: "Recife"
}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

deleteUser(3)
updateUser(3, userUpdated)

addNewUser(newUser)
getUsers()
getUser()
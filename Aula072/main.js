const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
    fetch(`${url}/${id}`)
      .then(response => response.json())
      .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
      })
      .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json;charset=UFT-8"
    }
  })
  .then(response => response.json())
  .then(data => alertApi.textContent = data)
  .catch(error => console.error(error))
}

function updateUser() {
  fetch(`${url}/1`, {
    method: "PUT",
    body: JSON.stringify(updateUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Olivia Zars",
  avatar: "http://lorempixel.com/400/200",
  city: "Rio do sul"
}

const updatedUser = {
  name: "Marcelo Clovis",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}

addUser(newUser)
deleteUser(5)
updateUser(updateUser, 1)
getUsers()
getUser()
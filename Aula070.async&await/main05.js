const userInfo = async id => {

    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        console.log(data)

    } catch(err) {
        console.log(err)
    }
}

userInfo(3);
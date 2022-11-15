const express = require('express') // Body Params

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post( (req, res) => {
    const {nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
} )
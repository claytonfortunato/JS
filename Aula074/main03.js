const express = require('express')//QUERY PARAMS

const app = express()

app.listen('3000')

app.route('/').get( (req,res) => res.send( req.query.nome) )

app.route('/about/user').get( (req,res) => res.send( req.query.id) )


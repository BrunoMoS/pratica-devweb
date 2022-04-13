require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const req = require('express/lib/request')
const res = require('express/lib/response')

const app = express()
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Bem vindo a API!'})
})
app.listen(3000)
require('dotenv').config()
const express = require('express')
const { json } = require('express/lib/response')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())
const personRoutes = require('./routes/PersonRoutes')
app.use('/person', personRoutes)
app.get('/', (req, res) => {
    res.json({message: 'Olá Mundo!'})
})
app.listen(3000)
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(`${DB_USER} ${DB_PASSWORD}`)
.then(() => {
    console.log('Deu certo!')
    app.listen(3000)
})
.catch((err) => console.log(err))

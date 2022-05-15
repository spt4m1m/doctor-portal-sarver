const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Doctor Portal Running')
})

app.listen(port, () => {
    console.log(`Doctor Portal Running in ${port}`)
})
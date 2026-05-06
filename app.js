const express = require('express');
const app = express();
const fruits = require("./routes/fruits-router")

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use(express.json());
app.use('/fruits', fruits);

module.exports = app
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const movieDatabase = require('./routes/movieDatabase')
const imdbAPI = require('./routes/imdbAPI')
const cors = require('cors')
const port = (process.env.PORT || 3000)

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/getOne', movieDatabase)
app.use('/api/imdb', imdbAPI)

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
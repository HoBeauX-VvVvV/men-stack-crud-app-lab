require('dotenv').config;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsxEngine = require('jsx-view-engine');
const Game = require('./models/game.js');
const PORT = 3000;
mongoose.connect(process.env.MONGO_URI);

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

mongoose.connection.once('open', () => {
    console.log(`MongoDB is rockin', hit me with your best data`)
});

mongoose.connection.on('error', () => {
    console.log(`Mongo has lost the plot`)
});




app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is lit up`)
});

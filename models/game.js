const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    publisher: { type: String },
    year: { type: Number },
    havePlayed: Boolean 
});

const Game = mongoose.model('Game', gameSchema)

module.exports = Game
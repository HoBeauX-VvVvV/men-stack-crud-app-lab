require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsxEngine = require('jsx-view-engine');
const Game = require('./models/game.js');
const methodOverride = require('method-override')
const PORT = 3000;
mongoose.connect(process.env.MONGO_URI)

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());
app.use(methodOverride('_method'));

mongoose.connection.once('open', () => {
    console.log(`MongoDB is rockin', hit me with your best data`)
});

mongoose.connection.on('error', () => {
    console.log(`Mongo has lost the plot`)
});

// CRUD
// CREATE
app.get('/games/new', (req, res) => {
    res.render('games/New')
});


app.post('/games', async (req, res) => {
   if(req.body.havePlayed === 'on') {  
        req.body.havePlayed = true
   } else {   
        req.body.havePlayed = false}
    try {
        const createdGame = await Game.create(req.body)
        res.redirect(`/games/${createdGame._id}`)
    } catch (error) {
        res.status(400).send({msg: error.message})
    }
});

//SHOW
app.get('/games/:id', async (req, res) => {
    try {
        const foundGame = await Game.findOne({_id: req.params.id})
        res.render('games/Show', {
            game: foundGame
        })
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
})

// READ INDEX

app.get('/games', async (req, res) => {
    try{
       const foundGames = await Game.find({})
       res.render('games/Index', {
           games: foundGames
       })
    } catch (error) {
       res.status(400).send ({ msg: error.message })
    }
});

// UPDATE
// EDIT

app.get('/games/:id/edit', async (req, res) => {
    try {
        const foundGame = await Game.findOne({_id: req.params.id});
        res.render('games/Edit', {
            game: foundGame
        });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});

app.put('/games/:id', async (req, res) => {
       try {
        if(req.body.havePlayed === 'on') {  
            req.body.havePlayed = true
       } else {   
            req.body.havePlayed = false}
           const updatedGame = await Game.findOneAndUpdate({ _id: req.params.id}, req.body, {new : true})
           res.redirect(`/games/${updatedGame._id}`)
       } catch (error) {
           res.status(400).send({ msg: error.message })
       }    
});

// DELETE

app.delete('/games/:id', async (req, res) => {
    try {
        await Game.findOneAndDelete({ _id: req.params.id })
        res.redirect('/games');
    } catch (error) {
        res.status(400).send({ msg: error.message })
    }
});


app.listen(PORT, () => {
    console.log(`The PORT at ${PORT} is lit up`)
});

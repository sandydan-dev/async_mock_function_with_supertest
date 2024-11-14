const express = require("express");
const app = express();
const port = 3000;

// controllers
const {
  getAllGamesDetails,
  getGamesById,
  getGamesByTitle,
  getGamesByTitleAndGenre,
  addNewGame,
  getAllDevelopers,
  getDeveloperById,
  getDeveloperByName,
  getDeveloperByCountry,
  addNewdeveloperDetails,
} = require("./controllers/game.controller");

// middelware
app.use(express.json({ strict: false }));

// get all game list
app.get('/api/games', async (_, res) => {
  try {
    let response = await getAllGamesDetails()
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: 'No games found' })
    }
  } catch (error) {
    console.log('Error Message ', error.message)
    res.status(500).json({ message: error.message })
  }
})


// get game by id
app.get('/api/games/id/:id', async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    let response = await getGamesById(id)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: 'No game found with this id' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
})


app.get('/api/games/title/:title', async (req, res) => {
  try {
    let title = req.params.title
    let response = await getGamesByTitle(title)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: 'No game found with this title' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })

  }
})


// get game title and genre
app.get('/api/games/title_genre', async (req, res) => {
  try {
    let title = req.query.title
    let genre = req.query.genre
    let response = await getGamesByTitleAndGenre(title, genre)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({
        message: 'No game found with this title and genre'
      })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.post('/api/add/new_game', async (req, res) => {
  try {
    let gameBody = req.body
    console.log('Parsed body:', gameBody);

    let response = await addNewGame(gameBody)
    if (response) {
      res.status(201).json(response)
    } else {
      res.status(400).json({ message: 'Failed to add new game' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
})

module.exports = { app, port };

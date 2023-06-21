// Importing the express module
const express = require('express');

// Importing the gamesController module
const gamesController = require('../controller/gameController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling the root path
router.route('/')
    .get(gamesController.viewGames); // GET request to view all games

// Defining a route for handling a game with a specific ID
router.route('/:id')
    .get(gamesController.viewGame); // GET request to view a specific game

// Exporting the router to be used by other modules
module.exports = router;

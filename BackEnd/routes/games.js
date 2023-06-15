const express = require ('express');
const gamesController = require('../controller/gameController');

const router = express.Router();

router.route('/')
.get(gamesController.viewGames);

router.route('/:id')
.get(gamesController.viewGame);

module.exports = router;
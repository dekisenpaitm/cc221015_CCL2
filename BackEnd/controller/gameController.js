const gameModel = require("../models/gameModel");
const userModel = require("../models/userModel");
const authenticationService = require("../services/authentication");


/**
 * This function sends the games-data to the view
 * This View shows all Games, which exist in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function viewGames(req, res, next) {
    gameModel.getGames()
        .then(games => res.send(games))
        .catch(error => res.sendStatus(500));
}

function viewGame(req, res, next) {
    gameModel.getGame(parseInt(req.params.id))
        .then(game => {
                res.send(game);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}

function viewGameComments(req, res, next) {
    gameModel.getGameComments(parseInt(req.params.id))
        .then(gameComments => {
            res.send(gameComments);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}

module.exports = {
    viewGames,
    viewGame,
    viewGameComments
}
const gameModel = require("../models/gameModel");

/**
 * This function passes the games to the view
 * This View shows all games which exist in the DB
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
/**
 * This function passes a specific game to the view
 * This View shows the specific game which exist in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
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

module.exports = {
    viewGames,
    viewGame,
}
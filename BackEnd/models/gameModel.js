//// Services
const db = require('../services/database.js').config;

/**
 * This function access the DB and retrieves all the games
 * @returns A list of all games within the DB
 */
let getGames = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'game'";
    db.query(sql, function (err, games, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(games)
        }
    })
});

/**
 * This function access the DB and retrieves a specific game attached to the contentID
 * @param contentID - The Data which is used to get specific game
 * @returns A list of all comments to a specific content within the DB
 */
let getGame = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'game' AND contentID =" + contentID;
    db.query(sql, function (err, game, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(game[0])
        }
    })
})

//// Exports
module.exports = {
    getGames,
    getGame,
};
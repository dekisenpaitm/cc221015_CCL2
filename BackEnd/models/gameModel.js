//// Services
const db = require('../services/database.js').config;

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
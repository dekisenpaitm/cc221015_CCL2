//// Services
const db = require('../services/database.js').config;

let getPixels = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'pixel'";
    db.query(sql, function (err, games, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(games)
        }
    })
});

let getPixel = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'pixel' AND contentID =" + contentID;
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
    getPixels,
    getPixel,
};
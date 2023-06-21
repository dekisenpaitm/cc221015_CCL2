//// Services
const db = require('../services/database.js').config;

/**
 * This function access the DB and retrieves all the pixel arts
 * @returns A list of all pixel arts within the DB
 */
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

/**
 * This function access the DB and retrieves a specific pixel art attached to the contentID
 * @param contentID - The Data which is used to get specific pixel art
 * @returns A list of all comments to a specific content within the DB
 */
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
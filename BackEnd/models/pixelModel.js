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

let getPixelComments = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM comment"+
        " INNER JOIN content "+
        "ON comment.contentID = content.contentID "+
        "WHERE comment.contentID=" + parseInt(contentID);
    db.query(sql, function (err, pixelComments, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(pixelComments)
        }
    })
})

//// Exports
module.exports = {
    getPixels,
    getPixel,
    getPixelComments
};
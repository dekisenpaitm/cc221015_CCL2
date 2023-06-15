//// Services
const db = require('../services/database.js').config;

let getUiuxs = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'uiux'";
    console.log(sql);
    db.query(sql, function (err, games, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(games)
        }
    })
});

let getUiux = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'uiux' AND contentID =" + contentID;
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
    getUiuxs,
    getUiux,
};
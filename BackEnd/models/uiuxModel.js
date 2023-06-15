//// Services
const db = require('../services/database.js').config;

let getUiuxs = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'uiux'";
    db.query(sql, function (err, uiuxs, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(uiuxs)
        }
    })
});

let getUiux = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM content WHERE type = 'uiux' AND contentID =" + contentID;
    db.query(sql, function (err, uiux, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(uiux[0])
        }
    })
})

//// Exports
module.exports = {
    getUiuxs,
    getUiux,
};
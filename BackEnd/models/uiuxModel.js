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

let getUiuxComments = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM comment"+
        " INNER JOIN content "+
        "ON comment.contentID = content.contentID "+
        "WHERE comment.contentID=" + parseInt(contentID);
    db.query(sql, function (err, uiuxComments, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(uiuxComments)
        }
    })
})

//// Exports
module.exports = {
    getUiuxs,
    getUiux,
    getUiuxComments
};
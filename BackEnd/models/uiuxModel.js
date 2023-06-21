//// Services
const db = require('../services/database.js').config;

/**
 * This function access the DB and retrieves all the uiux
 * @returns A list of all uiux within the DB
 */
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

/**
 * This function access the DB and retrieves a specific uiux attached to the contentID
 * @param contentID - The Data which is used to get specific uiux
 * @returns A list of all comments to a specific content within the DB
 */
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
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

let getGameComments = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM comment"+
        " INNER JOIN content "+
        "ON comment.contentID = content.contentID "+
        "WHERE comment.contentID=" + parseInt(contentID);
    db.query(sql, function (err, gameComments, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(gameComments)
        }
    })
})

let addGameComment = (userID, userName, content) => new Promise (async (resolve, reject)=> {
    let sql = "INSERT INTO comment (userID, contentID, commentUserName, commentTitel, body)" +
        " VALUES (" +  db.escape(userID) +
        "," + db.escape(content.contentID) +
        "," + db.escape(userName) +
        "," + db.escape(content.titel) +
        "," + db.escape(content.description) +
        ")";
    db.query(sql, function (err, result, fields){
        if(err) {
            reject(err)
        } else {
            resolve(content)
        }
    })
})

//// Exports
module.exports = {
    getGames,
    getGame,
    getGameComments,
    addGameComment
};
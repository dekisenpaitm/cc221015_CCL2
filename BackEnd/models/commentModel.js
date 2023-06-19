//// Services
const db = require('../services/database.js').config;
let getComments = (contentID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM comment"+
        " INNER JOIN content "+
        "ON comment.contentID = content.contentID "+
        "WHERE comment.contentID=" + parseInt(contentID);
    db.query(sql, function (err, comments, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(comments)
        }
    })
})

let postComment = (userID, userName, content) => new Promise (async (resolve, reject)=> {
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

let deleteAllComments = (userID) => new Promise ((resolve,reject)=>{
    let sql = "DELETE FROM comment"+
        " WHERE comment.userID= " + parseInt(userID);
    db.query(sql, function (err, userLike, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(userLike)
        }
    })
})

//// Exports
module.exports = {
    getComments,
    postComment,
    deleteAllComments
};
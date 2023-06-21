//// Services
const db = require('../services/database.js').config;

/**
 * This function access the DB and retrieves all the comments attached to the commentID
 * @param contentID - The Data which is used to get specific comments
 * @returns A list of all comments to a specific content within the DB
 */
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

/**
 * This function add a new comment to the DB
 * @param userID,userName,content - The Data, which the new comment will have
 * @returns An object, which represents the newly created comment
 */
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

/**
 * This function deletes all comments attached to a specific user in the DB
 * @param userID - The Data, which the new comment will have
 * @returns An object, which will be handled accordingly
 */
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
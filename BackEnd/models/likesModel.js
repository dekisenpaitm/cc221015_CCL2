//// Services
const db = require('../services/database.js').config;

let getLikes = (id) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM userLikes WHERE contentID= " + id;
    db.query(sql, function (err, userLikes, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(userLikes)
        }
    })
})

let getLike = (contentID, userID) => new Promise ((resolve, reject) => {
    let sql = "SELECT * FROM userLikes"+
        " WHERE userLikes.contentID= " + parseInt(contentID) +
        " AND userLikes.userID= " + parseInt(userID);
    db.query(sql, function (err, userLike, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(userLike)
        }
    })
})

let postLike = (userID,contentID) => new Promise ( (resolve, reject)=> {
    let sql = "INSERT INTO userLikes (userID, contentID)" +
        " VALUES (" +  db.escape(userID) +
        "," + db.escape(contentID) +
        ")";
    db.query(sql, function (err, result, fields){
        if(err) {
            reject(err)
        } else {
            resolve(contentID)
        }
    })
})

let deleteLike = (userID, contentID) => new Promise ((resolve,reject)=>{
    let sql = "DELETE FROM userLikes"+
        " WHERE userLikes.userID= " + parseInt(userID) +
        " AND userLikes.contentID= "+ parseInt(contentID);
    db.query(sql, function (err, userLike, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(userLike)
        }
    })
})

let deleteAllLikes = (userID) => new Promise ((resolve,reject)=>{
    let sql = "DELETE FROM userLikes"+
        " WHERE userLikes.userID= " + parseInt(userID);
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
    getLikes,
    getLike,
    postLike,
    deleteLike,
    deleteAllLikes
};
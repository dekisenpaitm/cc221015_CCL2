//// Services
const db = require('../services/database.js').config;

/**
 * This function access the DB and retrieves all the likes attached to the contentID
 * @param id - The Data which is used to get specific likes
 * @returns A list of all likes to a specific content within the DB
 */
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

/**
 * This function gets a specific like from the DB
 * @param contentID,userID - The Data, which is used to get a specific like
 * @returns An object, which holds the specific like
 */
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

/**
 * This function posts a specific like to the DB
 * @param contentID,userID - The Data, which is used to post a specific like to a specific content
 * @returns An object, which will be handled accordingly
 */
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

/**
 * This function deletes a specific like from the DB
 * @param contentID,userID - The Data, which is used to delete a specific like to a specific content
 * @returns An object, which will be handled accordingly
 */
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

/**
 * This function deletes all like from the DB attached to a single user
 * @param userID - The Data, which is used to delete a specific like to a specific content
 * Exists for further implementations.
 * @returns An object, which will be handled accordingly
 */
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
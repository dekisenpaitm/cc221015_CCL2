const db = require("../services/database").config;

/**
 * This function access the DB and retrieves all the messages
 * @returns A list of all comments to a specific content within the DB
 */
let getMessages = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM contact";
    db.query(sql, function (err, messages, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(messages)
        }
    })
})

/**
 * This function adds a message in the DB
 * @param messageData - The Data which is used to fill the DB fields
 * @returns An object, which will be handled accordingly
 */
let addMessage = (messageData) => new Promise (async (resolve, reject)=> {
    let sql = "INSERT INTO contact (name, email, titel, description)" +
        " VALUES (" +  db.escape(messageData.name) +
        "," + db.escape(messageData.email) +
        "," + db.escape(messageData.titel) +
        "," + db.escape(messageData.description) +
        ")";
    db.query(sql, function (err, result, fields){
        if(err) {
            reject(err)
        } else {
            resolve(messageData)
        }
    })
})

/**
 * This function deletes a message in the DB
 * @param id - The Data which is used to pick a specific message in the DB
 * @returns An object, which will be handled accordingly
 */
let deleteMessage = (id) => new Promise ((resolve, reject) => {
    let sql = "DELETE FROM contact WHERE contactID =" + parseInt(id);
    db.query(sql, function (err, result, fields){
        if(err) {
            reject(err)
        }
        resolve(id)
    })
})

module.exports = {
    getMessages,
    deleteMessage,
    addMessage
}
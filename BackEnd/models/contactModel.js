const db = require("../services/database").config;
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
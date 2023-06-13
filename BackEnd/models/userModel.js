//// Modules
const bcrypt = require('bcrypt');

//// Services
const db = require('../services/database.js').config;

//// Functions
/**
 * This function access the DB and retrieves all the users
 * @returns A list of all Users within the DB
 */
let getUsers = () => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM users";
    db.query(sql, function (err, users, fields) {
        if (err) {
            reject(err)
        } else {
            resolve(users)
        }
    })
})

/**
 * This function access the DB and retrieves all information form a specific user
 * @param id The ID of the User in question
 * @returns An object, which represents the user
 */
let getUser = (id) => new Promise((resolve, reject) => {
    let sql = "SELECT * FROM users WHERE userID ="+ parseInt(id);
    db.query(sql, function (err, user, fields) {
        if (err) {
            reject(err)
        } else {
            if(!user[0]){
                reject("user not found");
            }
            resolve(user[0])
        }
    })
})

/**
 * This function add a new User to the DB
 * @param userData The Data, which the new user will have
 * @returns An object, which represents the newly created user
 */
let addUser = (userData) => new Promise (async (resolve, reject)=> {
    userData.originalPassword = userData.password;
    userData.password = await bcrypt.hash(userData.password, 10);
    let sql = "INSERT INTO users (name, email, password)" +
        " VALUES (" +  db.escape(userData.name) +
        "," + db.escape(userData.email) +
        "," + db.escape(userData.password) +
        ")";
    db.query(sql, function (err, result, fields){
        if(err) {
            reject(err)
        } else {
            userData.userID = result.insertId;
            userData.role = "user";
            resolve(userData)
        }
    })
})
/**
 * This function deletes a User from the DB
 * @param id The ID of the Use in question
 * @returns The ID of the user
 */
let deleteUser = (id) => new Promise ((resolve, reject) => {
    let sql = "DELETE FROM users WHERE userID =" + parseInt(id);
    db.query(sql, function (err, result, fields){
        if(err) {
            reject(err)
        }
        resolve(id)
    })
})


//// Exports
module.exports = {
    getUsers,
    getUser,
    addUser,
    deleteUser
};

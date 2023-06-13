//// Modules
const path = require("path");
const fs = require("fs");

//// Models
const userModel = require("../models/userModel");

//// Functions
/**
 * This function renders the users-View
 * This View shows all Users, which exist in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function viewUsers(req, res, next) {
    userModel.getUsers()
        .then(users => res.send(users))
        .catch(error => res.sendStatus(500));
}

/**
 * This function renders the user-View
 * This View shows one User, which exist in the DB
 * specified by the req.params.id
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function viewUser(req, res, next) {
        console.log(req.params.id);
        userModel.getUser(parseInt(req.params.id))
            .then(user => {
                res.send(user);
                console.log(user)
            })
            .catch((err) => {
                res.status(404)
                next(err);
            })
}

/**
 * This function creates a new user
 * data inside req.body
 * Preferred-Methode: POST
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function register(req,res,next){
    userModel.addUser(req.body)
    .then(user => {
        res.send(user);
        res.status(200)
    res.send(user)})
        .catch(error => res.sendStatus(500))
}


/**
 * This function deletes a user
 * data inside req.body
 * Preferred-Methode: DELETE
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function deleteUser(req,res,next){
    userModel.deleteUser(parseInt(req.params.id)).then(
        data => {
            res.send(
                {
                    error: "",
                    status: 200,
                    redirect: "/users/"
                }
            );
        }
    )
    .catch(error => {
        res.send(
            {
                error: error,
                status: 500,
                redirect: "/"
            }
        );
    })

}

//// Exports
module.exports = {
    viewUsers,
    viewUser,
    register,
    deleteUser,
};
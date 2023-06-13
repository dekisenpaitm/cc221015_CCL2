//// Modules
const path = require("path");
const fs = require("fs");

const authenticationService = require("../services/authentication");

//// Models
const userModel = require("../models/userModel");
const {authenticateUser} = require("../services/authentication");

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
        userModel.getUser(parseInt(req.params.id))
            .then(user => {
                //let hasAccess = authenticationService.checkAccess(req.user.role, req.user.id, user.userID)
                res.send(user);
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
        authenticateUser({uname: req.body.name, pw: req.body.originalPassword}, [user], res).then(r => {});
    })
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

/**
 * This function creates tries to log in a user
 * data inside req.body
 * Preferred-Methode: POST
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function login(req,res,next){
    userModel.getUsers().then(async (users) => {
        await authenticationService.authenticateUser(req.body, users, res);
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
    });
}

/**
 * This function logs out the User
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware
 */
function logout(req,res,next){
    res.cookie('accessToken', '', {maxAge: 0});
    res.send(200);
}


//// Exports
module.exports = {
    viewUsers,
    viewUser,
    register,
    deleteUser,
    login,
    logout,
};
const likesModel = require("../models/likesModel");

/**
 * This function passes all likes to the specific view page
 * Uses reg.params.id to get the contentID
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getLikes(req, res, next) {
    likesModel.getLikes(req.params.id)
        .then(userLikes => {
            res.send(userLikes);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}

/**
 * This function passes a specific like by a specific user to the specific view page
 * Checks if the user exists (req.user)
 * Uses reg.params.id && req.user.iD to get the contentID & userID
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getLike(req, res, next) {
    if(req.user){
    likesModel.getLike(parseInt(req.params.id), req.user.id)
        .then(userLike => {
            res.send(userLike);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
    } else {
        res.sendStatus(500);
    }
}
/**
 * This function posts a specific like by a specific user to the specific view page
 * Checks if the user exists (req.user)
 * Uses reg.params.id && req.user.iD to get the contentID & userID
 * Preferred-Methode: POST
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function addLike(req,res,next) {
    if(req.user){
    likesModel.postLike(req.user.id, req.params.id)
        .then(likedPost => {
            res.send(likedPost);
        })
        .catch(error => {
            res.sendStatus(500)
        })
    } else {
        res.sendStatus(500)
    }
}
/**
 * This function deletes a specific like by a specific user to the specific view page
 * Checks if the user exists (req.user)
 * Uses reg.params.id && req.user.iD to get the contentID & userID
 * Preferred-Methode: DELETE
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function deleteLike(req,res,next){
    likesModel.deleteLike(req.user.id, req.params.id)
        .then(deleteLike => {
            res.sendStatus(200);
        })
        .catch(error => res.sendStatus(500))
}
/**
 * This function deletes all likes from a specific view page
 * Uses reg.params.id to get the contentID
 * Exists for further implementations
 * Preferred-Methode: DELETE
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function deleteAllUserLikes(req,res,next){
    likesModel.deleteAllLikes(req.params.id)
        .then(deleteLike => {
            res.sendStatus(200);
        })
        .catch(error => res.sendStatus(500))
}

module.exports = {
    getLikes,
    getLike,
    addLike,
    deleteLike,
    deleteAllUserLikes
}
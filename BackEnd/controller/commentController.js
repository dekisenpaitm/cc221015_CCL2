const commentModel = require("../models/commentModel");

/**
 * This function passes the comments to the view
 * This View shows all comments for the specific content & user, which exist in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getComments(req, res, next) {
    commentModel.getComments(parseInt(req.params.id))
        .then(comments => {
            res.send(comments);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}
/**
 * This function post the comments into the db
 * It uses the userID, userName and the content
 * Preferred-Methode: POST
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function postComment(req,res,next){
    if(req.user){
    commentModel.postComment(req.user.id, req.user.name, req.body)
        .then(comment => {
            res.send(comment);
        })
        .catch(error => res.sendStatus(500))
    }else{
        res.sendStatus(500)
    }
}
/**
 * This function deletes all comments attached to a specific user in the db
 * It uses the userID - backup for further implementations.
 * Preferred-Methode: POST
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function deleteAllComments(req,res,next){
    commentModel.deleteAllComments(req.params.id)
        .then(comment => {
            res.send(comment);
        })
        .catch(error => res.sendStatus(500))
}

module.exports = {
    getComments,
    postComment,
    deleteAllComments
}
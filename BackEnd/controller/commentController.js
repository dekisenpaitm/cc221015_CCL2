const commentModel = require("../models/commentModel");

/**
 * This function sends the games-data to the view
 * This View shows all Games, which exist in the DB
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

function postComment(req,res,next){
    if(req.user){
    commentModel.postComment(req.user.id, req.user.name,req.body)
        .then(comment => {
            res.send(comment);
        })
        .catch(error => res.sendStatus(500))
    }else{
        res.sendStatus(500)
    }
}

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
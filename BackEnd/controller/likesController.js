const likesModel = require("../models/likesModel");

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


function getLike(req, res, next) {
    likesModel.getLike(parseInt(req.params.id), req.user.id)
        .then(userLike => {
            res.send(userLike);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}

function addLike(req,res,next) {
    console.log("i happened")
    likesModel.postLike(req.user.id, req.params.id)
        .then(likedPost => {
            res.send(likedPost);
        })
        .catch(error => {
            res.sendStatus(500)
        })
}

function deleteLike(req,res,next){
    likesModel.deleteLike(req.user.id, req.params.id)
        .then(deleteLike => {
            res.sendStatus(200);
        })
        .catch(error => res.sendStatus(500))
}

module.exports = {
    getLikes,
    getLike,
    addLike,
    deleteLike
}
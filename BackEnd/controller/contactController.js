const contactModel = require("../models/contactModel");

function getMessages(req, res, next) {
    contactModel.getMessages()
        .then(users => res.send(users))
        .catch(error => res.sendStatus(500));
}

function addMessage(req,res,next){
    contactModel.addMessage(req.body)
        .then( user => {
                res.send("Message has been sent!");
        })
        .catch(error => res.send("Message couldn't be sent!"))
}

function deleteMessage(req,res,next) {
   contactModel.deleteMessage(req.body.messageID).then(
        data => {
            res.send("Message has been deleted!");
        }
    )
        .catch(error => {
            res.send("Message couldn't be deleted!");
        })
}

module.exports = {
    getMessages,
    deleteMessage,
    addMessage
}
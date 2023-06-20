const contactModel = require("../models/contactModel");

function getMessages(req, res, next) {
    if(req.user) {
        if (req.user.role === 'admin') {
            contactModel.getMessages()
                .then(users => res.send(users))
                .catch(error => res.status(500));
        }
    }
}

function addMessage(req,res,next){
    contactModel.addMessage(req.body)
        .then( user => {
                res.sendStatus(200);
        })
        .catch(error => res.sendStatus(500))
}

function deleteMessage(req,res,next) {
    console.log("i happend")
    console.log(req.params.id)
    contactModel.deleteMessage(req.params.id)
       .then(data => {
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
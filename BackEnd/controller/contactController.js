const contactModel = require("../models/contactModel");

/**
 * This function passes the messages to the view
 * This View shows all messages for the Admin, which exist in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function getMessages(req, res, next) {
    if(req.user) {
        if (req.user.role === 'admin') {
            contactModel.getMessages()
                .then(users => res.send(users))
                .catch(error => res.status(500));
        }
    }
}
/**
 * This function posts the message into the db
 * It uses the req.body which holds all necessary informations
 * Preferred-Methode: POST
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function addMessage(req,res,next){
    contactModel.addMessage(req.body)
        .then( user => {
                res.sendStatus(200);
        })
        .catch(error =>
            res.sendStatus(500))
}
/**
 * This function deletes a particular message attached to a specific messageID in the db
 * It uses the req.params.id which holds the messageID
 * Preferred-Methode: Delete
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function deleteMessage(req,res,next) {
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
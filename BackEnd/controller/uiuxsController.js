const uiuxModel = require("../models/uiuxModel");

/**
 * This function passes all uiuxs to the specific view page
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function viewUiuxs (req,res,next){
    uiuxModel.getUiuxs()
        .then(uiuxs => res.send(uiuxs))
        .catch(error => res.sendStatus(500));
}
/**
 * This function passes the specific Uiux to the specific view page
 * Uses reg.params.id to get the contentID
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function viewUiux(req, res, next) {
    uiuxModel.getUiux(parseInt(req.params.id))
        .then(uiux => {
            res.send(uiux);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}

module.exports = {
    viewUiuxs,
    viewUiux,
}
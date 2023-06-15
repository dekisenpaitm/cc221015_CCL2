const pixelModel = require("../models/pixelModel");
/**
 * This function sends the games-data to the view
 * This View shows all Games, which exist in the DB
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
function viewPixels(req, res, next) {
    pixelModel.getPixels()
        .then(pixels => res.send(pixels))
        .catch(error => res.sendStatus(500));
}

function viewPixel(req, res, next) {
    pixelModel.getPixel(parseInt(req.params.id))
        .then(pixel => {
            res.send(pixel);
        })
        .catch((err) => {
            res.status(404)
            next(err);
        })
}

module.exports = {
    viewPixels,
    viewPixel
}
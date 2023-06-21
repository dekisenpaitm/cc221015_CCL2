const pixelModel = require("../models/pixelModel");
/**
 * This function passes all PixelArts to the specific view page
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
/**
 * This function passes the specific PixelArt to the specific view page
 * Uses reg.params.id to get the contentID
 * Preferred-Methode: GET
 *
 * @param req HTTP-Request
 * @param res HTTP-Response
 * @param next Possible-Middleware Callback
 */
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
    viewPixel,

}
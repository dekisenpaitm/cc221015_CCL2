const uiuxModel = require("../models/uiuxModel");

function viewUiuxs (req,res,next){
    uiuxModel.getUiuxs()
        .then(uiuxs => res.send(uiuxs))
        .catch(error => res.sendStatus(500));
}

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
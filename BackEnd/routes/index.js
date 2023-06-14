//// Modules
const express = require('express');
const {authenticateJWT} = require("../services/authentication");

//// Routes
const router = express.Router();

router.route('/')
    .get((req,res,next)=>{
        res.status(200);
        res.send(JSON.stringify(req.user));
        console.log("this is the req.user: "+ req.user);
    });

//// Exports
module.exports = router;
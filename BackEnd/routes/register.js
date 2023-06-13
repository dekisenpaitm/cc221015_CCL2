//// Modules
const express = require('express');

//// Controllers
const userController = require("../controller/userController");

//// Routes
const router = express.Router();

router.route('/add')
    .post(userController.register);

//// Exports
module.exports = router;
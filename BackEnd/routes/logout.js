//// Modules
const express = require('express');

//// Controllers
const userController = require('../controller/userController');

//// Routes
const router = express.Router();

router.route('/')
    .get(userController.logout);

//// Exports
module.exports = router;
//// Modules
const express = require('express');

//// Controllers
const userController = require('../controller/userController');

//// Routes
const router = express.Router();

router.route('/')
    .get(userController.viewUsers);

router.route('/:id')
    .all(userController.viewUser);

router.route('/:id/delete')
    .delete(userController.deleteUser);

//// Modules
module.exports = router;
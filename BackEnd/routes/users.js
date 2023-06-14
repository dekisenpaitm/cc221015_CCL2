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

router.route('/:id/edit')
    .get(userController.getUserData)
    .put(userController.editUser);

//// Modules
module.exports = router;
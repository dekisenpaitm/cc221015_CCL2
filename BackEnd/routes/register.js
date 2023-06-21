// Importing the express module
const express = require('express');

// Importing the userController module
const userController = require('../controller/userController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling the '/add' path
router.route('/add')
    .post(userController.register); // POST request to register a new user

// Exporting the router to be used by other modules
module.exports = router;

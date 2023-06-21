// Importing the express module
const express = require('express');

// Importing the userController module
const userController = require('../controller/userController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling the root path '/'
router.route('/')
    .get(userController.logout); // GET request to perform user logout

// Exporting the router to be used by other modules
module.exports = router;

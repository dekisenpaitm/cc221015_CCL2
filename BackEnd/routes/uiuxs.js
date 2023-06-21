// Importing the express module
const express = require('express');

// Importing the uiuxsController module
const uiuxsController = require('../controller/uiuxsController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling the root path '/'
router.route('/')
    .get(uiuxsController.viewUiuxs); // GET request to view all UI/UXs

// Defining a route for handling a UI/UX with a specific ID
router.route('/:id')
    .get(uiuxsController.viewUiux); // GET request to view a specific UI/UX

// Exporting the router to be used by other modules
module.exports = router;
// Importing the express module
const express = require('express');

// Importing the pixelController module
const pixelController = require('../controller/pixelController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling the root path '/'
router.route('/')
    .get(pixelController.viewPixels); // GET request to view all pixels

// Defining a route for handling a pixel with a specific ID
router.route('/:id')
    .get(pixelController.viewPixel); // GET request to view a specific pixel

// Exporting the router to be used by other modules
module.exports = router;

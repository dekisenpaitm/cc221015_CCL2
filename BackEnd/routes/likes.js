// Importing the express module
const express = require('express');

// Importing the likesController module
const likesController = require('../controller/likesController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling likes with a specific ID
router.route('/:id')
    .get(likesController.getLike) // GET request to retrieve a like
    .post(likesController.addLike); // POST request to add a new like

// Defining a route for handling all likes with a specific ID
router.route('/:id/all')
    .get(likesController.getLikes); // GET request to retrieve all likes

// Defining a route for deleting a like with a specific ID
router.route('/:id/delete')
    .delete(likesController.deleteLike); // DELETE request to delete a like

// Exporting the router to be used by other modules
module.exports = router;

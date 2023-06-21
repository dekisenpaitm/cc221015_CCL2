// Importing the express module
const express = require('express');

// Importing the commentController module
const commentController = require('../controller/commentController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling comments with a specific ID
router.route('/:id')
    .get(commentController.getComments) // GET request to retrieve comments
    .post(commentController.postComment); // POST request to add a new comment

// Exporting the router to be used by other modules
module.exports = router;
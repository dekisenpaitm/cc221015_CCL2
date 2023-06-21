// Importing the express module
const express = require('express');

// Importing the contactController module
const contactController = require('../controller/contactController');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling messages
router.route('/')
    .get(contactController.getMessages) // GET request to retrieve messages
    .post(contactController.addMessage); // POST request to add a new message

// Defining a route for handling a message with a specific ID
router.route('/:id')
    .delete(contactController.deleteMessage); // DELETE request to delete a message

// Exporting the router to be used by other modules
module.exports = router;

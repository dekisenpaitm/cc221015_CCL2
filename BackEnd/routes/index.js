// Importing the express module
const express = require('express');

// Creating a new router instance
const router = express.Router();

// Defining a route for handling the root path '/'
router.route('/')
    .get((req, res, next) => {
        res.status(200); // Set the response status code to 200
        res.send(JSON.stringify(req.user)); // Send a JSON string representation of the 'req.user' object in the response body
    });

// Exporting the router to be used by other modules
module.exports = router;

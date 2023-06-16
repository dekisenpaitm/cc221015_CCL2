const express = require('express');
const commentController = require ('../controller/commentController')

const router = express.Router();

router.route('/:id')
    .get(commentController.getComments)
    .post(commentController.postComment)

module.exports = router;
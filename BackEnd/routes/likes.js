const express = require('express')
const likesController = require('../controller/likesController')
const router = express.Router()

router.route('/:id')
    .get(likesController.getLike)
    .post(likesController.addLike)

router.route('/:id/all')
    .get(likesController.getLikes)

router.route('/:id/delete')
    .delete(likesController.deleteLike)

module.exports = router
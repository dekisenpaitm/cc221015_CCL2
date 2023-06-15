const express = require('express');
const pixelController = require('../controller/pixelController')

const router = express.Router();

router.route('/')
.get(pixelController.viewPixels);

router.route('/:id')
.get(pixelController.viewPixel);

router.route('/:id/comments')
    .get(pixelController.viewPixelComments);

module.exports = router;
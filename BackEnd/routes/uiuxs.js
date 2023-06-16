const express = require('express');
const uiuxsController = require ('../controller/uiuxsController')
const router = express.Router();

router.route('/')
    .get(uiuxsController.viewUiuxs)

router.route('/:id')
    .get(uiuxsController.viewUiux)

module.exports = router;

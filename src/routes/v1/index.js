const express = require('express');

const router = express.Router();
const { infoController, EmailController } = require('../../controllers');

router.get('/info', infoController);

router.post('/tickets', EmailController.create);

module.exports = router;

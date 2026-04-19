const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url.controller');

router.post('/shorten', urlController.createShortUrl);
router.get('/stats/:code', urlController.getStats);
router.get('/:code', urlController.redirectUrl);

module.exports = router;
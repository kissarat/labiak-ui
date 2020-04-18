const express = require('express');
const offerHandlers = require('../handlers/offer');
const { wrapErrorHandler } = require('../services/error');

const router = express.Router();

router.get('/offers', wrapErrorHandler(offerHandlers.list));

module.exports = router;

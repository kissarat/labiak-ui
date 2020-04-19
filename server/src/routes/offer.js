const express = require('express');
const offerHandlers = require('../handlers/offer');
const { wrapErrorHandler } = require('../services/error');

const router = express.Router();

router.get('/offers', wrapErrorHandler(offerHandlers.list));
router.post('/offer', wrapErrorHandler(offerHandlers.create));
router.put('/offer/:offerId', wrapErrorHandler(offerHandlers.update));
router.delete('/offer/:offerId', wrapErrorHandler(offerHandlers.delete));

module.exports = router;

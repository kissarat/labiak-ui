const express = require('express');
const currencyHandlers = require('../handlers/currency');
const { wrapErrorHandler } = require('../services/error');

const router = express.Router();

router.get('/currencies', wrapErrorHandler(currencyHandlers.list));

module.exports = router;

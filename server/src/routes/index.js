const express = require('express');
const currencyRouter = require('./currency');

const router = express.Router();

const app = express();

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.get('/healthcheck', (req, res) => {
  res.json({
    ok: 1,
    ip: req.ip
  });
});

router.use(currencyRouter);

module.exports = router;

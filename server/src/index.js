const fastify = require('fastify');
const bodyParder = require('body-parser');
const router = require('./routes/index.js');
const { createServiceResolver } = require('./services/service-resolver');
const qs = require('querystring');
// import websocket from './middleware/websocket';
const app = fastify({
  logger: true
});

app.use(function (req, res, next) {
  try {
    const parts = req.url.split('?');
    req.query = parts[1] ? qs.parse(parts[1]) : {};
    res.setHeader('access-control-allow-origin', 'http://localhost:4200');
    res.setHeader('access-control-allow-methods', 'PUT,POST,DELETE,OPTIONS');
    res.setHeader('access-control-allow-headers', 'content-type');
    req.services = createServiceResolver();
    next();
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: err.message });
  }
});

app.use(bodyParder.json());

// websocket(app);
app.use('/api/v1', router);
app.get('/', (req, res) => res.redirect('/api/v1/healthcheck'))

app.listen(+process.env.PORT || 3000);

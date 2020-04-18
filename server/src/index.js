const fastify = require('fastify');
const bodyParder = require('body-parser');
const router = require('./routes/index.js');
const qs = require('querystring');
// import websocket from './middleware/websocket';
const app = fastify({
  logger: true
});

app.use(function (req, res, next) {
  const parts = req.url.split('?');
  req.query = parts[1] ? qs.parse(parts[1]) : {};
  res.setHeader('access-control-allow-origin', 'http://localhost:4200');
  next();
});

app.use(bodyParder.json());

// websocket(app);
app.use('/api/v1', router);
app.get('/', (req, res) => res.redirect('/api/v1/healthcheck'))

app.listen(+process.env.PORT || 3000);

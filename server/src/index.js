const fastify = require('fastify');
const bodyParder = require('body-parser');
const router = require('./routes/index.js');
// import websocket from './middleware/websocket';
const app = fastify({
  logger: true
});

app.use(bodyParder.json());

app.use(function(req, res, next) {
  res.setHeader('access-control-allow-origin', 'http://localhost:4200');
  next();
})

// websocket(app);
app.use('/api/v1', router);
app.get('/', (req, res) => res.redirect('/api/v1/healthcheck'))

app.listen(+process.env.PORT || 3000);

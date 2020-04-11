const fastify = require('fastify');
const router = require('./routes/index.js');
// import websocket from './middleware/websocket';
const app = fastify({
  logger: true
});

// websocket(app);
app.use('/api/v1', router);
app.get('/', (req, res) => res.redirect('/api/v1/healthcheck'))

app.listen(+process.env.PORT || 3000);

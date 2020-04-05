const fastify = require('fastify');
const router = require('./routes');
const app = fastify({
  logger: true
});

app.use('/api/v1', router);
app.get('/', (req, res) => res.redirect('/api/v1/healthcheck'))

app.listen(+process.env.PORT || 3000);

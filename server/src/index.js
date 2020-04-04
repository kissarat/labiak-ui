const fastify = require('fastify');
const app = fastify({
  logger: true
});

app.get('/', (req, res) => res.redirect('/api/v1'))
app.get('/api/v1', function (req, res) {
  res.send(`Hello World, ${req.ip}`);
});

app.listen(+process.env.PORT || 3000);

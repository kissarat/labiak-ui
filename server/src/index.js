const express = require('express');
const app = express();

app.get('/', (req, res) => res.redirect('/api/v1'))
app.get('/api/v1', function (req, res) {
  res.send(`Hello World, ${req.connection.remoteAddress}`);
});

app.listen(+process.env.PORT || 3000);

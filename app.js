'use strict';
const
  express = require('express'),
  app = express();

app.use('/', express.static(__dirname + '/public'));
app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('server starting on: http://localhost:3000');
});

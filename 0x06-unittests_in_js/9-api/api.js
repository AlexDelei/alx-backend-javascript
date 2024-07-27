const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (!req.params.id) {
    return res.send('id cannot be empty');
  }
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0) {
    return res.status(404).send('id must be an integer');
  }
  res.status(200).send(`Payment methods for cart ${id}`);
  res.end();
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

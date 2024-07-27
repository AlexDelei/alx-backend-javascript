const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!(id) || isNaN(id) || id < 0) {
    return res.status(404).send('An error occured while trying to make your request');
  };
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;

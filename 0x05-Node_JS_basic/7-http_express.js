const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
  res.end();
});

app.get('/students', async (req, res) => {
  if (!process.argv[2]) {
    res.status(500).end(
      'This is the list of our students\n'
      + 'Cannot load the database',
    );
  }
  try {
    const data = await countStudents(process.argv[2]);
    res.status(200).send(`This is the list of our students\n${data}`);
    res.end();
  } catch (error) {
    res.status(500).end(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port);

module.exports = app;

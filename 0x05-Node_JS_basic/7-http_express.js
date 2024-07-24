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
    res.writeHead(404);
    res.end(
      'This is the list of our students\n'
      + 'Cannot load the database',
    );
  }
  try {
    const data = await countStudents(process.argv[2]);
    res.statusCode = 200;
    res.send(`This is the list of our students\n${data}`);
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.end(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port);

module.exports = app;

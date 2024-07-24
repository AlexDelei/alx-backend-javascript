const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    try {
      const result = await countStudents(process.argv[2]);
      res.write(`This is the list of our students\n${result}`);
    } catch (error) {
      res.write('Cannot load the database');
    }
    res.end();
  }
});

app.listen(port);

module.exports = app;

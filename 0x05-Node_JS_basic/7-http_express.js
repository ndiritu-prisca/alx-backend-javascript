const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const DB = args[0];
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let msg = '';
  msg = 'This is the list of our students';
  try {
    const students = await countStudents(DB);
    res.send(`${msg}\n${students.join('\n')}`);
  } catch (error) {
    res.send(`${msg}\n${error.message}`);
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;

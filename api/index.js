const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const contacts = require('./data/contacts');
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

const tasks = require('./data/tasks');
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

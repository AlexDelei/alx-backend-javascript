const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const app = express();

app.get('/', (request, response) => {
  AppController.getHomepage(request, response);
});

app.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

app.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

module.exports = app;

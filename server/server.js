const connection = require('./databaseConnection');
const express = require('express');
const server = express();

server.get('/api/grades', (req, res) => {
  let query = "SELECT (`student_name`, `student_course`, `student_grade`) FROM `grades`";
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    console.log(results);
  });
});

// server.post('/api/grades', (req, res) => {

// });

// server.delete('/api/grades', (req, res) => {

// });

// server.put('/api/grades', (req, res) => {

// });

server.listen(3001);

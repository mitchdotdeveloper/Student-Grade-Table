const connection = require('./databaseConnection');
const express = require('express');
const server = express();

server.get('/api/grades', (req, res) => {
  let query = "SELECT * FROM `grades`";
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    let response = results.map(row => {
                     return {
                       id: row.id,
                       name: row.student_name,
                       course: row.student_course,
                       grade: row.student_grade
                     }
                   });
    res.send(response);
  });
});

// server.post('/api/grades', (req, res) => {

// });

// server.delete('/api/grades', (req, res) => {

// });

// server.put('/api/grades', (req, res) => {

// });

server.listen(3001);

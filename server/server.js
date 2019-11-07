const connection = require('./databaseConnection');
const express = require('express');
const server = express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.get('/api/grades', (req, res) => {
  let query = "SELECT * FROM `grades`";
  connection.query(query, (error, results) => {
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

server.post('/api/grades', (req, res) => {
  let query = "INSERT INTO `grades` (`student_name`, `student_course`, `student_grade`) ";
  query += `VALUES ('${req.body.name}', '${req.body.course}', ${req.body.grade})`;
  connection.query(query, (error, result) => {
    if ( error ) throw error;
    res.send({
      id: result.insertId,
      name: req.body.name,
      course: req.body.course,
      grade: req.body.grade
    });
  });

});

// server.delete('/api/grades', (req, res) => {

// });

// server.put('/api/grades', (req, res) => {

// });

server.listen(3001);

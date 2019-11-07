const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

connection.query('SELECT 1', (error, results, fields) => {
  if ( error ) throw error;
 });

module.exports = connection;

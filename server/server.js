const connection = require('./databaseConnection');
const express = require('express');
const server = express();

server.get('/', (req, res) => res.send('hi'));

server.listen(4001);

const express = require('express');
const server = express();
const PORT = process.env.PORT || 8000;

server.get('/', (req, res)=>{
  res.status(200).json({api: 'running'});
});

module.exports = server;


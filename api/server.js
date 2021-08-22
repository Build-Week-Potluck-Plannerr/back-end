const express = require('express');
const server = express();
const PORT = process.env.PORT || 8000;
const userRouter = require('./users/usersRouter');


server.use(express.json());

server.use('/api/users', userRouter);

server.get('/', (req, res)=>{
  res.status(200).json({api: 'running'});
});

server.use(function( err, req, res, next) {
  res.status(err.status || 500 ).json({
    message: 'something is wrong',
    customeMessage: err.message,
    stack: err.stack,
  });
});

module.exports = server;


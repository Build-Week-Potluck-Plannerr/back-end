const express = require('express');
const server = express();
const PORT = process.env.PORT || 8000;
const authRouter = require('./auth/authRouter');
const userRouter = require('./users/usersRouter');
const helmet = require('helmet');
const cors = require('cors');
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter );
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


const express = require('express');
const server = express();
const PORT = process.env.PORT || 8000;
const {v4: uuid} = require('uuid');
const authRouter = require('./auth/authRouter');
const userRouter = require('./users/usersRouter');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const potlucksRouter = require('./potlucks/potlucks-router');

server.use(session({
  name: uuid(),
  secret: [uuid(), uuid(), uuid()],
  cookie: {
    maxAge: 1000 * 60 * 30,
    secure: false,
    httpOnly: false,
  },
  rolling: true,
  resave: false,
  saveUninitialized: false,
}));
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter );
server.use('/api/users', userRouter);
server.use('/api/potlucks', potlucksRouter);


server.get('/', (req, res)=>{
  res.status(200).json({api: 'running'});
});

server.use(function( err, req, res, next) {
  res.status(err.status || 500 ).json({
    validationErrors: err.errors,
    message: 'something is wrong',
    stack: err.stack,
  });
});

module.exports = server;


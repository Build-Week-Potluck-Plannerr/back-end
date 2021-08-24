const express = require('express');
const {validatePayload} = require('./authModel');
const {userSchema} = require('../schemas/schemas');
const router = express.Router(); // eslint-disable-line

router.post('/register',
    validatePayload(userSchema),
    (req, res, next)=> {
      res.json({message: 'registration here! '});
    });

router.post('/login', (req, res, next)=>{
  res.json({message: 'login here!'});
});

router.get('/logout', (req, res, next)=>{
  res.json({message: 'logout here!'});
});

module.exports = router;

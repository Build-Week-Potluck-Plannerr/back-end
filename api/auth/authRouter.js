const express = require('express');
const router = express.Router(); // eslint-disable-line

router.post('/register', (req, res, next)=> {
  res.json({message: 'registration here! '});
});

router.post('/login', (req, res, next)=>{
  res.json({message: 'login here!'});
});

router.get('/logout', (req, res, next)=>{
  res.json({message: 'logout here!'});
});

module.exports = router;

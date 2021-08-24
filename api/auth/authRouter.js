const express = require('express');
const {validatePayload} = require('./authModel');
const {userSchema} = require('../schemas/schemas');
const router = express.Router(); // eslint-disable-line
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel');

router.post('/register',
    validatePayload(userSchema),
    async (req, res, next)=> {
      try {
        const {username, password, name} = req.body;
        const hash = bcrypt.hashSync(password, 12);
        const user = {name, username, password: hash};
        const newUser = await Users.add(user);
        res.json(newUser);
      } catch (err) {
        next(err);
      }
    });

router.post('/login', (req, res, next)=>{
  res.json({message: 'login here!'});
});

router.get('/logout', (req, res, next)=>{
  res.json({message: 'logout here!'});
});

module.exports = router;

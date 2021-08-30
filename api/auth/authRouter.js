const express = require('express');
const {validatePayload,
  validateCredentials} = require('./authMiddleware');
const {userSchemaRegister,
  userSchemaLogin} = require('../schemas/schemas');
const router = express.Router(); // eslint-disable-line
const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel');

router.post('/register',
    validatePayload(userSchemaRegister),
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

router.post('/login',
    validatePayload(userSchemaLogin),
    validateCredentials,
    (req, res, next)=>{
      res.json(req.body);
      next();
    });

router.get('/logout', (req, res, next)=>{
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) {
        res.json({message: 'error logging out'});
      } else {
        res.redirect('/');
      }
    },
    );
  } else {
    res.json({message: 'No session to logout of!'});
  }
});


module.exports = router;

const express = require('express');
const router = express.Router(); // eslint-disable-line
const Users = require('./usersModel');

router.get('/',
    async (req, res)=>{
      const users = await Users.find();
      res.json(users);
    });

module.exports = router;

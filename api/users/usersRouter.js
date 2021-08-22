const express = require('express');
const router = express.Router(); // eslint-disable-line
const Users = require('./usersModel');
const {checkUserData} = require('./usersMiddleware');

/**
 * user router should be used by anyone
 * that needs to who is attending, and
 * what they are bringing.
 * @return {array} users
 */
router.get('/',
    checkUserData,
    async (req, res)=>{
      res.json(req.body);
    });


/**
 * only be used by the host to
 * organize the event and the route should
 * get /:filter should
 * be restricted to only hosts.
 * @return {object} user
 */
router.get('/:filter',
    (req, res)=>{

    });

module.exports = router;

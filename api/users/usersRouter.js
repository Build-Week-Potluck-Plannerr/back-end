const express = require('express');
const router = express.Router(); // eslint-disable-line
const {checkUserData,
  checkSearchUsername,
  checkId} = require('./usersMiddleware');
const {restricted} = require('../auth/authMiddleware');
const Users = require('./usersModel');
/**
 * user router should be used by anyone
 * that needs to who is attending, and
 * what they are bringing.
 * @return {array} users
 */
router.get('/',
    checkUserData,
    restricted,
    async (req, res)=>{
      res.json(req.body);
    });


/**
 * only be used by the host to
 * organize the event and the route should
 * get /:filter (such as username.) should
 * be restricted to only hosts.
 * @return {object} user
 */
router.post('/search',
    checkSearchUsername,
    (req, res)=>{
      res.json(req.body);
    });

router.put('/edit/:id',
    checkId,
    async (req, res)=>{
      try {
        const userInfo = await Users.updateById(req.params.id, req.body);
        console.log(userInfo);
      } catch {
        res.status(500).json({
          message: 'user account is unable to be updated.',
        });
      }
    },
);
module.exports = router;

const Users = require('./usersModel');

const checkUserData = async ( req, res, next ) => {
  try {
    const users = await Users.find();
    if ( !users || users.length === 0 ) {
      res.json({message: 'no users in database', users});
    } else {
      req.body = users;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkSearchUsername = async (req, res, next) => {
  try {
    console.log(`searching for ${req.params.username}...`);
    const user = await Users.findBy(req.params.username);
    if (!user) {
      res.status(404).json({message: 'user not found'});
    } else {
      req.body = user;
      next();
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkUserData,
  checkSearchUsername,
};

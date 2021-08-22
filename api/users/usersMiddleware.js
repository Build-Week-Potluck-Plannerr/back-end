const User = require('./usersModel');

const checkUserData = async ( req, res, next ) => {
  try {
    const users = await User.find();
    if (!users || users.length(0)) {
      res.json({message: 'no users in database', users});
    } else {
      req.body = users;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkUserData,
}```
const Users = require('./usersModel');

/**
 * checks to make sure there are users in the db
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkUserData = async ( req, res, next ) => {
  try {
    const users = await Users.find();
    if ( !users || users.length === 0 ) {
      next({message: 'no users in database'});
    } else {
      req.body = users;
      next();
    }
  } catch (err) {
    next(err);
  }
};

/**
 * takes the req object and returns the user based
 * based on the first parameter it finds in the req.body
 * @param {object} req, username, food, or name
 * @param {*} res
 * @param {*} next
 */
const checkSearchUsername = async (req, res, next) => {
  const user = Object.keys(req.body);
  try {
    switch (user[0]) {
      case 'username':
        req.body = await Users.findBy({username: req.body.username});
        if (req.body.length === 0) {
          res.status(404)
              .json({message: 'user not found - Username is case sensivite'});
        }
        next();
        break;
      case 'name':
        req.body = await Users.findBy({name: req.body.name});
        if (req.body.length === 0) {
          res.status(404)
              .json({message: 'user not found - Name is case sensivite'});
        }
        next();
        break;
      case 'food':
        req.body = await Users.findBy({food: req.body.food});
        if (req.body.length === 0) {
          res.status(404)
              .json({message: 'user not found - Food is case sensivite'});
        }
        next();
        break;
      case 'dish':
        req.body = await Users.findBy({dish: req.body.dish});
        if (req.body.length === 0) {
          res.status(404)
              .json({message: 'user not found - dish is case sensivite'});
        }
        next();
        break;
      default:
        res.status(404)
            .json({message: 'user not found - thing is case sensivite'});
    }
  } catch (err) {
    next(err);
  }
};

const checkId = async (req, res, next) => {
  const user = await Users.findById(req.params.id);
  if (!user) {
    res.status(404).json({message: 'user not found'});
  } else {
    next();
  }
};
//   if (username) {
//     const user = await Users.findBy({username: req.body.username});
//     if (!user) {
//       res.status(404).json({message: 'user not found'});
//     } else {
//       req.body = user;
//       next();
//     }
//   }
// } catch (error) {
//   next(error);
// }

module.exports = {
  checkUserData,
  checkSearchUsername,
  checkId,
};

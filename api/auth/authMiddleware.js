const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel');
/**
 * restricts routes to specific users with authorization,
 * todo: session v cookie.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const restricted = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    next({
      status: 401,
      message: 'invalid credentials',
    });
  }
};

/**
 * takes in yup schema and validates it.
 * @param {object} schema
 * @return  {object} Returns all errors found in form data.
 */
const validatePayload = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body, {abortEarly: false});
    next();
  } catch ( error) {
    next(error);
  }
};

/**
 * Attempts to find user in database and returns error if the user
 * has not registered properly.
 * @param {*} req checks req.body for username and password
 * @param {*} res ------------
 * @param {*} next hands request to next middleware or parent object/function
 */
const validateCredentials = async (req, res, next) => {
  try {
    const {username, password} = req.body;

    const [user] = await Users.findBy({username});
    const passwordCheck = bcrypt.compareSync(password, user.password);
    // why false!?

    if (user && passwordCheck) {
      console.log(user);
      console.log(req.session);
      req.session.user = user;
      res.json({message: 'Welcome to your experience!'});
      next();
    } else {
      console.log(user);
      next({status: 401, message: 'invalid credentials'});
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  restricted,
  validatePayload,
  validateCredentials,
};

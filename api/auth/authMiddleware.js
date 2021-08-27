const bcrypt = require('bcryptjs');
const Users = require('../users/usersModel');
const jwt = require('jsonwebtoken');

/**
 * restricts routes to specific users with authorization,
 * todo: session v cookie.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*} error
 */
const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({status: 401, message: 'Token is required'});
  }
  jwt.verify(token, process.env.JWT_SECRET , (err, decodedToken) =>{
    if (err) {
      next({status: 401, message: 'forgery detected'});
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });

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

    const createToken = (user) =>{
      const payload = {
        subject: user.id,
      };
      const secret = process.env.JWT_SECRET;
      const options = {
        expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
      };
      return jwt.sign(payload, secret, options);
    };
    const token = createToken(user);


    if (user && passwordCheck) {
      console.log(user);
      console.log(req.session);
      req.session.user = user;
      res.json({
        user: {
          name: user.name,
          username: user.username,
          id: user.id,
          email: user.email,
        },
        token,
        // TODO:
        // create accept/deny alert re:cookies redirect -> JWT
        // token,
      });
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

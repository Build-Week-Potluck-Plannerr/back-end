/**
 * restricts routes to specific users with authorization,
 * todo: session v cookie.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const restricted = (req, res, next) => {
  console.log('this is restricted space.');
  next();
};

const validatePayload = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body, {abortEarly: false});
    next();
  } catch ( error) {
    next(error);
  }
};


const validateCredentials = async (req, res, next) => {
  try {
    const {username, password} = req.body;
    const exists = await Users.findBy({username});
    if (exists.length) {
      console.log(exists);
      next();
    } else {
      next({status: 401, message: 'invalid credentials'});
    }
  } catch (err) {
    next(err);
}

module.exports = {
  restricted,
  validatePayload,
  validateCredentials,
};

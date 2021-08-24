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


module.exports = {
  restricted,
};

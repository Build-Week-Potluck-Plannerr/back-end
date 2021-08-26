
const jwt = require('jsonwebtoken');
const {v4: uuid} = require('uuid');

const createToken = (user) =>{
  const payload = {
    subject: user.id,
  };
  const secret = process.env.JWT_SECRET || uuid();
  const options = {
    expires: Math.floor(Date.now() / 1000) + (60 * 60),
  };
  return jwt.sign(payload, secret, options);
};

module.exports = createToken;

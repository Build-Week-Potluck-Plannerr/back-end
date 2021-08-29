const Potlucks = require('./potlucks-model');

/**
 * checks to make sure there are potlucks in the db
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function checkPotluckData(req, res, next) {
  try {
    const potlucks = await Potlucks.find();

    if (!potlucks || potlucks.length === 0) {
      next({message: 'no events coming up'});
    } else {
      req.body = potlucks;
      next();
    }
  } catch (err) {
    next(err);
  }
}


module.exports = {checkPotluckData};

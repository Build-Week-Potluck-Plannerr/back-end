const Dishes = require('./dishes-model');

/**
 * checks to make sure there are potlucks in the db
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function checkDishData(req, res, next) {
  try {
    const dishes = await Dishes.find();

    if (!dishes || dishes.length === 0) {
      next({message: 'no events coming up'});
    } else {
      req.body = dishes;
      next();
    }
  } catch (err) {
    next(err);
  }
}

/**
 * verifies that the potluck is in the database via [id]
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const checkDishId = async (req, res, next) => {
  const dishes = await Dishes.findById(req.params.id);
  if (!dishes) {
    res.status(404).json({message: 'dish not found'});
  } else {
    next();
  }
};

module.exports = {checkDishData, checkDishId};

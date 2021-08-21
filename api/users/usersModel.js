const db = require('../../data/db-configure');

/** selects all users
 * @return {array} users
*/
function find() {
  return db('users');
}

/**
 * selects users by passing an attribute such as username
 * @param {*} filter
 * @return {object} user
 */
function findBy(filter) {
  return db('users').where(filter);
}

/**
 * selects a user based on their id
 * @param {number} id
 * @return {object} user
 */
function findById(id) {
  return db('users')
      .where('id', id)
      .first();
}

/**
 * creates a new user,
 * if no role is given they will be added as guest
 * @param {*} user
 * @return {object} user
 */
async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};

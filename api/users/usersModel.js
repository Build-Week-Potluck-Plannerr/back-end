const db = require('../../data/db-configure');

/** selects all users
 * @return {array} users
*/
function find() {
  return db('users');
}

/**
 * selects users by passing an attribute such as username
 * @param {*} search
 * @return {object} user
 */
function findBy(search) {
  return db('users').where(search);
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
} // is this redundant?

/**
 * creates a new user,
 * if no role is given they will be added as guest
 * @param {*} user
 * @return {object} user
 */
async function add(user) {
  const [newUser] = await db('users')
      .insert(user);
  return await findById(newUser);
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};

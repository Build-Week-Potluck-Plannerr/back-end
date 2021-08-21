const db = require('../../data/db-configure');

/** selects all users
 * @return {array} users
*/
function find() {
  return db('users');
}

/**
 *
 * @param {*} filter
 * @return {object} user
 */
function findBy(filter) {
  return db('users').where(filter);
}

/**
 *
 * @param {number} id
 * @return {object} user
 */
function findById(id) {
  return db('users')
      .where('id', id)
      .first();
}

/**
 *
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

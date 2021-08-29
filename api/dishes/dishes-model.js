const db = require('../../data/db-configure');
const subj = 'dishes'
/** selects all users
 * @return {array} users
*/
function find() {
  return db('users');
}

/**
 * selects users by passing an attribute such as username, dish or name
 *
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

/**
 *  finds user to update and
 * replaces old information with new
 * @param {*} id
 * @param {*} account
 * @return {*} updated user
 */
const updateById = async (id, account) => {
  await db('users').where('id', id).update(account);
  return findById(id);
};

/**
 * takes id and deletes corrosponding user account
 * @param {*} id
 * @return {*} deleted user
 */
const deleteById = async (id) => {
  await db('users').where('id', id).del();
  return findById(id);
};

module.exports = {
  find,
  findBy,
  findById,
  add,
  updateById,
  deleteById,
};

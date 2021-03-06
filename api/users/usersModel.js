const db = require('../../data/db-configure');
const subj = 'users';

/** selects allsubj
* @return {array} users
*/
function find() {
  return db(subj);
}

/**
 * selectssubjby passing an attribute such as username, dish or name
 *
 * @param {*} search
 * @return {object} user
 */
function findBy(search) {
  return db(subj).where(search);
}

/**
 * selects a user based on their id
 * @param {number} id
 * @return {object} user
 */
function findById(id) {
  return db(subj)
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
  const [newUser] = await db(subj)
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
  await db(subj).where('id', id).update(account);
  return findById(id);
};

/**
 * takes id and deletes corrosponding user account
 * @param {*} id
 * @return {*} deleted user
 */
const deleteById = async (id) => {
  await db(subj).where('id', id).del();
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

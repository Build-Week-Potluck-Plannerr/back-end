const db = require('../../data/db-configure');
const subj = 'dishes';

/**
 * selects all dishes
 *
 * @return {array}subj*/
function find() {
  return db(subj);
}

/**
 * selectssubjby passing an attribute such as username, dish or name
 *
 * @param {*} search
 * @return {object} dishes
 */
function findBy(search) {
  return db(subj).where(search);
}

/**
 * selects a dish based on their id
 * @param {number} id
 * @return {object} user
 */
function findById(id) {
  return db(subj)
      .where('dishes_id', id)
      .first();
} // is this redundant?

/**
 * creates a new dish,
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
 *  finds dish to update and
 * replaces old information with new
 * @param {*} id
 * @param {*} account
 * @return {*} updated user
 */
const updateById = async (id, account) => {
  await db(subj).where('dishes_id', id).update(account);
  return findById(id);
};

/**
 * takes id and deletes corrosponding dish
 * @param {*} id
 * @return {*} deleted user
 */
const deleteById = async (id) => {
  await db(subj).where('dishes_id', id).del();
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

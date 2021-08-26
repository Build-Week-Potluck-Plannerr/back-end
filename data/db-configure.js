const knex = require('knex');
const config = require('../knexfile.js');

// select the dev object
const db = knex(config.development);

// export
module.exports = db;

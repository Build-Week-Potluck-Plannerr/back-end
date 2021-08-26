
exports.up = function(knex, Promise) {
  return knex.schema
      .createTable('users', (table) => {
        table.increments();
        table.text('username').unique().notNullable();
        table.text('password').notNullable();
        table.text('name').notNullable();
        table.text('role').defaultTo('guest');
      })
      .createTable('potluck dishes', (table) => {
        table.increments();
        table.text('drinks');
        table.text('entree');
        table.text('appetizers');
        table.text('sides');
        table.text('dessert');
      })
      .createTable('potluck event', (table)=> {
        table.increments();
        table.text('name');
        table.text('date');
        table.text('time');
        table.text('location');
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

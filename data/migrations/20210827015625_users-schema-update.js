
exports.up = function(knex) {
  return knex.schema
      .table('users', (table)=> {
        table.text('email').notNullable().default('please add e-mail');
      });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) =>{
    table.dropColumn('email').notNullable().default('please add e-mail');
  });
};

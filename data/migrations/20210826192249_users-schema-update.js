
exports.up = function(knex, Promise) {
  return knex.schema
      .table('users', (table) =>{
        table.integer('potluck_id')
            .references('potlucks.potluck_id');
      })
      .createTable(
          'dishes', (table) => {
            table.increments('dishes_id');
            table.text('dish_name');
            table.integer('eaches')
                .unsigned();
            table.integer('potluck_id')
                .references('potlucks.potluck_id');
          },
      ).createTable(
          'potlucks', (table) => {
            table.increments('potluck_id');
            table.text('potluck_name');
            table.text('location');
            table.text('date');
          },
      );
};

exports.down = function(knex, Promise) {
  return knex.schema
      .dropTableIfExists('potlucks')
      .dropTableIfExists('dishes')
      .table('users', (table) =>{
        table.dropColumn('potluck_id');
      });
};

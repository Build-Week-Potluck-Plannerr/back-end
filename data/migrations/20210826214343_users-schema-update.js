
exports.up = function(knex) {
  return knex.schema
      .table('dishes', (table)=> {
        table.text('image_source');
      });
};

exports.down = function(knex) {
  return knex.schema.table('dishes', (table) =>{
    table.dropColumn('image_source');
  });
};

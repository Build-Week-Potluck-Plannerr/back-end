
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
      .then(function() {
      // Inserts seed entries
        return knex('dishes').insert([
          {dishes_id: 1, dish_name: 'chicken wings', eaches: 24},
          {dishes_id: 2, dish_name: 'librations', eaches: 48},
          {dishes_id: 3, dish_name: 'veggie platter', eaches: 5},
        ]);
      });
};

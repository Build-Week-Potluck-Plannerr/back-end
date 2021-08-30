
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('potlucks').truncate()
      .then(function() {
      // Inserts seed entries
        return knex('potlucks').insert([
          {potluck_id: 1, potluck_name: 'halloween bash', date: '10/29'},
          {potluck_id: 2, potluck_name: 'christmas bash', date: '12/19'},
          {potluck_id: 3, potluck_name: 'ted got fired bash', date: '1/2'},
        ]);
      });
};

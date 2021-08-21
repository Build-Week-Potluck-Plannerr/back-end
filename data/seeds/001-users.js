
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
      .then(function() {
      // Inserts seed entries
        return knex('users').insert([
          {id: 1,
            username: 'Velma',
            password: 'scoobysnacks',
            name: 'Ellen',
            role: 'host'},
          {id: 2,
            username: 'Scoob',
            password: 'scoobysnacks',
            name: 'Sam',
            role: 'guest'},
          {id: 3,
            username: 'Daphne',
            password: 'scoobysnacks',
            name: 'Dean',
            role: 'guest'},
        ]);
      });
};

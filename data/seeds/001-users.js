
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
      .then(function() {
      // Inserts seed entries
        return knex('users').insert([
          {
            'id': 1,
            'name': 'linda',
            'password':
                 '$2a$12$8PjGtgU5nhOH67SQEmg75.ol4t81tXs.mSN0J0FbsEKCf95sQW8UO',
            'potluck_id': null,
            'role': 'role',
            'username': 'velma',
          },
          {
            'id': 2,
            'name': 'matthew',
            'password':
                 '$2a$12$ghkyzcI8gytdd/tD/TinaeSCy0OWmWQxQH1BTeOJQrDxM0MToT5f6',
            'potluck_id': null,
            'role': 'guest',
            'username': 'shaggy',
          },
          {
            'id': 3,
            'name': 'freddie',
            'password':
                 '$2a$12$g9gcZWQGxYYS0vNTInw6bu2.Jsw1uY7Xe70rD9Vv6iTNZ6p2VL50a',
            'potluck_id': null,
            'role': 'guest',
            'username': 'frederick',
          },
        ]);
      });
};

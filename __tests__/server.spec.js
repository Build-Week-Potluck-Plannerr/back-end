const request = require('supertest'); 
// calling it "request" is a common practice

const server = require('../api/server'); 
// this is our first red, file doesn't exist yet

describe('server.js', () => {
  // http calls made with supertest return promises,
  //  we can use async/await if desired
  describe('1) index route', () => {
    it('a.) should return an OK status code from the index route', () => {
      return request(server).get('/')
          .expect(200);
    });

    it('b) should return the correct JSON object from the index route', () => {
      return request(server).get('/')
          .then((res) => {
            expect(res.body.api).toBe('running');
          });
    });

    it('c) should return a JSON object from the index route', async () => {
      return request(server).get('/')
          .expect('Content-Type', /json/);
    });
  });
});


const request = require('supertest');
const app = require('../app')
var assert = require('assert');

  describe('Get Ruta Cambio TExto', () => {
    it('Test Cambio texto', function(done) {
        request(app)
          .get('/api/textchange/?texto=Tobi')
          .set('Accept', 'application/json')
          //.expect('Content-Type', 'json')
          .expect(200)
          .then(response => {
            assert(response.body.texto, 'iboT')
            done();
        })
        .catch(err => {
            console.log('Error ', err);
            done(err)
        })
      });
  })

  describe('Get Ruta Cambio Texto 2', () => {
    it('Test Cambio texto 2', function(done) {
        request(app)
          .get('/api/textchange/?texto=Tobi')
          .set('Accept', 'application/json')
          //.expect('Content-Type', 'json')
          .expect(200)
          .end( (err, response) => {
            assert(response.body.texto , '123')
            done();
          })
      });
  });



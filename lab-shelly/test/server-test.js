'use strict';

const server = require('../server');
const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;

chai.use(http);

describe('Server module', function() {
  before(done => { //before any tests run, do this
    server.listen(3000);
    done();
  });

  describe('POST method', function() {
    describe('/ endpoint with invalid pathway', function() {
      it('should respond with a status code 400 on bad request', done => {
        chai.request(server) //mocks request to server
        .post('/lalala')
        .send({})
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
      });
    });
    describe('/ endpoint', function() {
      it('should respond with a status code 200', done => {
        chai.request(server)
        .post('/cowsay')
        .send({text: 'hi'})
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
      });
    });
    describe('/cowsay endpoint', function() {
      it('should respond with a status code 200', done => {
        chai.request(server)
        .post('/cowsay')
        .send({text: 'hi'})
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
      });
    });
  });

  describe('GET method', function() {

    describe('/ endpoint with bad filepath', function() {
      it('should respond with a 400 on bad request', done => {
        chai.request(server)
        .get('/cowsay')
        .send({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
      });
    });
    describe('/ endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .get('/')
        .send({})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          done();
        });
      });
    });

    describe('/cowsay endpoint', function() {
      it('should respond with a 200 on proper request', done => {
        chai.request(server)
        .get('/cowsay?text=message')
        .send({})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res.status).to.equal(200);
          done();
        });
      });
      it('should respond with the user inputed query string', done => {
        chai.request(server)
        .get('/cowsay?text=hi')
        .send({})
        .end((err, res) => {
          expect(res).to.be.string;
          expect(err).to.be.null;
          done();
        });
      });
    });
  });
  //run this after everything is done
  after(done => {
    server.close();
    done();
  });
});

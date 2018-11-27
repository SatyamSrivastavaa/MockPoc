'use strict';

const expect = require('chai').expect;
var app = require('../../server/server');
let Userdetail = app.models.Userdetail;

describe('Test user detail model', () => {
    it('Should return a Promise', (done)=>{
        expect(Userdetail.getcountryCode('1', null)).to.be.a('Promise');
        done();
    });

    it('user id 1 should return name Tejaswini', (done) => {
        Userdetail.getcountryCode('1', null)
            .then(response=> {
                expect(response.name).to.eq('Tejaswini');
                done();
            })
            .catch(err => {
                done(new Error(err));
            });
    });

    it('user id 1 should return countryCode CG', (done) => {
        Userdetail.getcountryCode('1', null)
            .then(response=> {
                expect(response.countryCode).to.eq('CG');
                done();
            })
            .catch(err => {
                done(new Error(err));
            });
    });

    it('Should return undefined for err response', (done)=> {
        Userdetail.getcountryCode('', null)
          .then(response => {
              console.log(response);
              expect(response).to.eq(null);
              done();
            })
          .catch(err => {
              done(new Error(err));
            });
    });
});

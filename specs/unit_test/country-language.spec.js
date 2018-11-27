'use strict';

const expect = require('chai').expect;
var app = require('../../server/server');
let CountryLanguage = app.models.CountryLanguage;

describe('Test country language model', () => {
  it('Country name India should return language Hindi', (done) => {
    CountryLanguage.getCountryLanguage('India', null)
      .then(language => {
          expect(language.language).to.eq('Hindi');
          done();
        })
      .catch(err => {
          done(new Error(err));
        });
  });

  it('Should return a Promise', (done)=>{
    expect(CountryLanguage.getCountryLanguage('India', null))
    .to.be.a('Promise');
    done();
  });

  it('Should return undefined for err response', (done)=> {
    CountryLanguage.getCountryLanguage('', null)
      .then(language => {
          console.log(language.language);
          expect(language.language).to.eq(undefined);
          done();
        })
      .catch(err => {
          done(new Error(err));
        });
  });
});


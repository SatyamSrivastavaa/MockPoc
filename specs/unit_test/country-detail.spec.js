'use strict';

const expect = require('chai').expect;
var app = require('../../server/server');
let CountryDetail = app.models.CountryDetail;

function initMock() {
  CountryDetail.ListOfCountryNamesByCode = function(obj, cb) {
    cb(null,
      {ListOfCountryNamesByCodeResult:
        {
            tCountryCodeAndName:
            [
              {
                'sISOCode': 'IN',
                'sName': 'India'
              },
              {
                'sISOCode': 'AE',
                'sName': 'United Arab Emirates'
              }
            ]
        }
    });
  };
}

function mockErrorResponse() {
    CountryDetail.ListOfCountryNamesByCode = function(obj, cb) {
      cb(new Error(), null);
    };
}

describe('Test country detail model', () => {
  beforeEach(function() {
    initMock();
  });

  it('Country code IN should return country name India', (done) => {
    CountryDetail.getCountryName('IN', null)
      .then(countryName => {
          expect(countryName).to.eq('India');
          done();
        })
      .catch(err => {
          done(new Error(err));
        });
  });

  it('Should return a Promise', (done)=>{
    expect(CountryDetail.getCountryName('IN', null)).to.be.a('Promise');
    done();
  });

  it('Should return empty for err response', (done)=> {
    mockErrorResponse();
    CountryDetail.getCountryName('IN', null)
      .then(countryName => {
          expect(countryName).to.eq('');
          done();
        })
      .catch(err => {
          done(new Error(err));
        });
  });
});

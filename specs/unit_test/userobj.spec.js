'use strict';

var app = require('../../server/server');
const assert = require('chai').assert;
let CountryDetail = app.models.CountryDetail;
const CTX_PATH = '/api';
const supertest = require('supertest');

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
                },
                {
                    'sISOCode': 'CG',
                    'sName': 'Congo'
                }
              ]
          }
      });
    };
  }

describe('Test user obj model', () => {
    it('should return 200 success', (done) => {
        initMock();
        supertest(app)
        .get(`${CTX_PATH}/userobjs/getDetailsById?id=1`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                done.fail();
            } else {
                console.log("response: ", res.body);
                assert.equal(res.statusCode, 200, 'done');
                done();
            }
        });
    });
    it('should return err status', (done) => {
        initMock();
        supertest(app)
        .get(`${CTX_PATH}/userobjs/getDetailsById?id=6`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                done.fail();
            } else {
                assert.equal(res.statusCode, 404, 'done');
                done();
            }
        });
    });
});

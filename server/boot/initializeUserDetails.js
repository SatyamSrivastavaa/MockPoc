'use strict';

var logger = require('../../config/winston');

module.exports = function(app) {
   let userData = [
    {
      'name': 'Tejaswini',
      'countryCode': 'CG'
    },
    {
      'name': 'Satyam',
      'countryCode': 'IN'
    },
    {
      'name': 'Aditya',
      'countryCode': 'TO'
    },
    {
      'name': 'Seema',
      'countryCode': 'TW'
    },
    {
      'name': 'Naushad',
      'countryCode': 'TR'
    }
  ];
  let userDetail = app.models.Userdetail;
  userData.forEach((data) => {
    userDetail.create(data, (err, obj) => {
        logger.debug('Creted user record for:'+ obj.name + ', Country:' + obj.countryCode);
      });
  });
};

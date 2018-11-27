'use strict';

var logger = require('../../config/winston');

module.exports = function(app) {
  let countryData = [
    {
      'countryName': 'Tonga',
      'language': 'Spanish'
    },
    {
      'countryName': 'India',
      'language': 'Hindi'
    },
    {
      'countryName': 'Congo',
      'language': 'English'
    },
    {
      'countryName': 'Taiwan',
      'language': 'Taiwanese'
    },
    {
      'countryName': 'Turkey',
      'language': 'Turkish'
    }
  ];
  let countryLanguage = app.models.Country_Language;
  countryData.forEach((data) => {
      countryLanguage.create(data, (err, obj) => {
        logger.debug('Creted country record for:'+ obj.countryName + ', Language:' + obj.language);
      });
  });
};

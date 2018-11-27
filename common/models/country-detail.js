'use strict';
var logger = require('../../config/winston');

module.exports = function(Countrydetail) {
      Countrydetail.getCountryName = function(id, cb) {
        logger.info('Get country name reqeuest received for country code:'+ id);
        return new Promise(function(resolve, reject) {
            Countrydetail.ListOfCountryNamesByCode({}, function(err, response) {
                logger.info('Response from soap service:' + response);
                var result = !err ?
                response.ListOfCountryNamesByCodeResult.tCountryCodeAndName :
                 [];
                var countryName = '';
                result.forEach(element => {
                  if (element.sISOCode === id) {
                      countryName = element.sName;
                  }
                });
                logger.info('Country name found to be:' + countryName);
                resolve(countryName);
              });
        });
      };
};

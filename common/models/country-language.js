'use strict';

var logger = require('../../config/winston');

module.exports = function(CountryLanguage) {
    CountryLanguage.getCountryLanguage = function(countryName, callback) {
        logger.info('Get country language for country:' + countryName);
        return new Promise(function(resolve, reject) {
            var pattern = new RegExp(countryName, 'i');
            var response = {};
            if (countryName !== '') {
                CountryLanguage.find({
                    where: {countryName: {like: pattern}}},
                    (err, CountryLanguageObj) => {
                    CountryLanguageObj.forEach(CountryObject => {
                        response.language = CountryObject.language;
                        logger.info('Language found as:' + response.language);
                        resolve(response);
                    });
                });
            } else {
                response.languge = '';
                logger.info('Language found as:' + response.language);
                resolve(response);
            }
        });
    };
};

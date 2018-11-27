'use strict';
var app = require('../../server/server');
var logger = require('../../config/winston');

module.exports = function(Userobj) {
    Userobj.getDetailsById = function(id, callback) {
        logger.info('Reqeuest received for user id:'+ id);
        let obj = {};

        var promise = app.models.Userdetail.getcountryCode(id, callback);
        promise.then(code => getCountryName(code.countryCode, code.name, obj))
                .then(countryName => getCountryLanguage(countryName, obj))
                .then(countryLanguage => {
                        obj.language = countryLanguage.language;
                        logger.info('Returning object:' + obj);
                        callback(null, obj);
                })
                .catch(() => {
                    let errObj = new Error();
                    errObj.name = 'not_found';
                    errObj.status = 404;
                    errObj.message = 'unable to found the data you are looking for';
                    callback(errObj, obj);
                });
    };

    function getCountryLanguage(countryName, obj) {
        obj.countryName = countryName;
        return app.models.CountryLanguage.getCountryLanguage(countryName, null);
    }
    function getCountryName(countryCode, name, obj) {
        obj.name = name;
        return app.models.CountryDetail.getCountryName(countryCode, null);
    }
};

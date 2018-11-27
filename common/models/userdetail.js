'use strict';

var logger = require('../../config/winston');

module.exports = function(Userdetail) {
    Userdetail.getcountryCode = function(id, callback) {
        logger.info('Request received to get country code for user id:' + id);
        return new Promise(function(resolve, reject) {
            Userdetail.find({where: {id: id}}, (err, response)=>{
                let obj = null;
                response.forEach(userDetailsObject => {
                    obj = {
                        name: userDetailsObject.name,
                        countryCode: userDetailsObject.countryCode
                    };
                });
                logger.info('Returning object :' + obj);
                resolve(obj);
            });
        });
    };
};

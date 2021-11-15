'use strict';

var properties = require ('../package.json');
var weather = require ('../service/weather');

var controllers = {
    about: function(req, res) {
        var aboutInfo = {
            name: properties.name,
            version: properties.version
        }
        res.json(aboutInfo);
    },
    getWeather: function(req, res) {
        weather.find(req, res, function(err, wea) {
            if (err)
                res.send(err);
            res.json(wea);
        });
    }
};

module.exports = controllers;
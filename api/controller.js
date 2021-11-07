'use strict';

import properties from '../package.json';
import weather from '../service/weather';

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
       },
};

module.exports = controllers;
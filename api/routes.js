'use strict';

var controller = require ('./controller');

module.exports = function(app) {
    app.route('/about')
        .get(controller.about);
    app.route('/weather/:lat/:lon')
        .get(controller.getWeather);
};
const request = require ('request');
const mongodb = require ('./mongodb');

const apiKey = process.env.TZ_APIKEY || "cabb9bc685ca04423d96c9655419ea41";
const openWeatherURL = 'https://api.openweathermap.org/data/2.5/onecall?';

var weather = {
    find: function(req, res, next) {
        if(
            mongodb.mongoSearch(
                req.params.lat,req.params.lon
            )
        );
        else {
            request(openWeatherURL + 'lat=' + req.params.lat + '&lon=' + req.params.lon + '&exclude=current,minutely,alerts&appid=' + apiKey,
            // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);

                } else {
                    console.log(response.statusCode + response.body);
                    res.send({weather: -1});
                }
            });
            mongodb.mongoInsert(req.params.lat,req.params.lon);
        }
    }
};

module.exports = weather;
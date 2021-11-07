import request from 'request';

const apiKey = process.env.TZ_APIKEY || "cbf8e864dc2bd1b635b60acd98d0e82e";
const openWeatherURL = 'https://api.openweathermap.org/data/2.5/onecall?';

var weather = {
    find: function(req, res, next) {
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
    }
};

export default weather;
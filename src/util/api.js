import axios from 'axios';

let _baseURL = 'https://api.openweathermap.org/data/2.5/';
let _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&');
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  };
}

function currentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data;
    });
}

function fiveDayWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data;
    });
}

export default {
  fiveDayWeather: fiveDayWeather,
  currentWeather: currentWeather
};
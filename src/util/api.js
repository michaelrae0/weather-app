import axios from 'axios';

let id  = 'e3f00766f0f14117d085486ead35eb5b';

function currentWeather(city) {
  return window.encodeURI('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&type=accurate&APPID=' + id);
}
function fiveDayWeather(city) {
  return window.encodeURI('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&type=accurate&APPID=' + id + '&cnt=5');
}

export default {
  fetchWeather(city) {
    let currentURI = currentWeather(city);
    

    return axios.get(currentURI)
      .then(function(response) {
        // return response;
        return response.data.list[0];
      })
  }
}
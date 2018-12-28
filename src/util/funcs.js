function toFahrenheit(kelvin) {
  return Math.round(kelvin * 9 / 5 - 459.67);
}
function calcFontSize(widthScale, ratio) {
  let width = document.documentElement.clientWidth * widthScale;
  let fontSize = width*ratio;

  return fontSize;
}

export default {
  toFahrenheit,
  calcFontSize
};
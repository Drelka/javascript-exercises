const convertToCelsius = function(tempInFar) {
  return parseFloat(((tempInFar  - 32) * 5/9).toFixed(1)); 
};

const convertToFahrenheit = function(tempInCel) {
  return parseFloat((tempInCel * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

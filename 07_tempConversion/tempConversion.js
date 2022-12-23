const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * .5556;
  let rounded = Math.round(temperature * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(temperature) {
  temperature = (temperature * 1.8) + 32
  let rounded = Math.round(temperature * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

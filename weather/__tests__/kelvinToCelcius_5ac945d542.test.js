// ********RoostGPT********
// Test generated by RoostGPT for test checkJestConfigChanges using AI Type Open AI and AI Model gpt-4



// ********RoostGPT********
const expect = require('chai').expect;
const fetchWeather = require('../fetch-weather');

describe('Fetch Weather', () => {
  describe('kelvinToCelcius', () => {

    it('should correctly convert 0 Kelvin to -273 Celsius', () => {
      const cTemp = fetchWeather.kelvinToCelcius(0);
      expect(cTemp).to.equal(-273);
    });

    it('should correctly convert 273 Kelvin to 0 Celsius', () => {
      const cTemp = fetchWeather.kelvinToCelcius(273);
      expect(cTemp).to.equal(0);
    });

    it('should handle negative Kelvin values', () => {
      const cTemp = fetchWeather.kelvinToCelcius(-10);
      expect(cTemp).to.equal(-283);
    });

    it('should return NaN for non-numeric values', () => {
      const cTemp = fetchWeather.kelvinToCelcius('a string');
      expect(cTemp).to.be.NaN;
    });
  });
});

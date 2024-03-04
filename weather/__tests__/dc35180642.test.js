// ********RoostGPT********
// Test generated by RoostGPT for test checkJestConfigChanges using AI Type Open AI and AI Model gpt-4



// ********RoostGPT********
const expect = require('chai').expect;
const fetchWeather = require('../weather/fetchWeather');
const prepareForWeather = require('../weather/prepareForWeather');

describe('fetchWeather', () => {
  let today;
  beforeEach(() => {
    today = {
      temp: 25,
      rain: false,
      sun: true
    };
  });

  it('should prepare correct weather kit for sunny day', (done) => {
    fetchWeather.fetchWeather('location', function (today) {
      let weatherKit = [{
        'name': 'Umbrella',
        'value': prepareForWeather.doINeed.umbrella(today)
      }, {
        'name': 'Suncream',
        'value': prepareForWeather.doINeed.suncream(today)
      }, {
        'name': 'Jumper',
        'value': prepareForWeather.doINeed.jumper(today)
      }, {
        'name': 'Water',
        'value': prepareForWeather.doINeed.water(today)
      }];
      expect(weatherKit[0].value).to.be.false;
      expect(weatherKit[1].value).to.be.true;
      expect(weatherKit[2].value).to.be.false;
      expect(weatherKit[3].value).to.be.true;
      done();
    });
  });

  it('should handle error when location is not valid', (done) => {
    fetchWeather.fetchWeather('invalid_location', function (error, today) {
      expect(error).to.not.be.null;
      expect(today).to.be.undefined;
      done();
    });
  });
});

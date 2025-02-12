// ********RoostGPT********
// Test generated by RoostGPT for test checkJestConfigChanges using AI Type Open AI and AI Model gpt-4

// ********RoostGPT********
const expect = require("chai").expect;
const nock = require("nock");
const { fetchWeather } = require("../fetch-weather");

describe("Fetch Weather Tests", () => {
  beforeEach(() => {
    nock("http://api.openweathermap.org")
      .get("/data/2.5/weather?q=London&appid=aa0f1b0be45dca476178787f941c76dc")
      .reply(200, {
        location: "London",
        temperature: "15°C",
      });
  });

  it("Fetches weather successfully", (done) => {
    fetchWeather("London", (data) => {
      expect(data).to.have.property("location");
      expect(data.location).to.equal("London");
      expect(data).to.have.property("temperature");
      done();
    });
  });

  it("Handles errors", (done) => {
    nock("http://api.openweathermap.org")
      .get(
        "/data/2.5/weather?q=InvalidLocation&appid=aa0f1b0be45dca476178787f941c76dc"
      )
      .replyWithError("Something went wrong");

    fetchWeather("InvalidLocation", (error) => {
      expect(error).to.not.be.null;
      done();
    });
  });
});

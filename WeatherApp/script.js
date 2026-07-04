var cityInput = document.getElementById("cityInput");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");
var btn = document.getElementById("add");
const apiKey = "REDACTED";

function kelvin_to_celsius(temp) {
  return (temp - 273).toFixed(0);
}

async function getLongLat() {
  var cityName = cityInput.value;
  const locationData = await (
    await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${1}&appid=${apiKey}`,
    )
  ).json();
  getWeather(locationData);
}

async function getWeather(data) {
  const weatherData = await (
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data[0]["lat"]}&lon=${data[0]["lon"]}&appid=${apiKey}`,
    )
  ).json();
  setData(weatherData);
}

const setData = (weather) => {
  cityOutput.innerHTML = `Location: ${weather["name"]}`;
  descOutput.innerHTML = `Description: ${weather["weather"][0]["description"]}`;
  tempOutput.innerHTML = `Temperature: ${kelvin_to_celsius(weather["main"]["temp"])} C`;
  windOutput.innerHTML = `Wind Speed: ${weather["wind"]["speed"]} Km/h`;
};

btn.addEventListener("click", getLongLat);

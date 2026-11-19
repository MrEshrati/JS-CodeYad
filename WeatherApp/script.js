var cityInput = document.getElementById("cityInput");
var cityOutput = document.getElementById("cityoutput");
var descOutput = document.getElementById("description");
var tempOutput = document.getElementById("temp");
var windOutput = document.getElementById("wind");
var btn = document.getElementById("add");
async function getWeather() {
  const city = cityInput.value;
  try {
    const response = await fetch('/api/weather?' + new URLSearchParams({ city }));
    const weather = await response.json();
    if (!response.ok) {
      throw new Error(weather.message);
    }
    setData(weather);
  } catch (error) {
    descOutput.textContent = error.message;
  }
}

const setData = (weather) => {
  cityOutput.textContent = `Location: ${weather["name"]}`;
  descOutput.textContent = `Description: ${weather["weather"][0]["description"]}`;
  tempOutput.textContent = `Temperature: ${Math.round(weather["main"]["temp"])} C`;
  windOutput.textContent = `Wind Speed: ${weather["wind"]["speed"]} Km/h`;
};

btn.addEventListener("click", getWeather);

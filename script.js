function getWeather() {
  const city = document.getElementById('city-input').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=64e150956656817922c74019d36c4c65&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weather-info');
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;

      weatherInfo.innerHTML = `
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

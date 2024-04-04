function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    /* I had to change the API because the MetaWeather API is not working. I looked on forums 
    and GitHub for a solution and unfortunately I had to change the API */
    const apiKey = '2e4286759225450692492702240404';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather Forecast for ${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
                <p>Condition: ${data.current.condition.text}</p>
            `;
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
        });
}

// Function to fetch weather data based on the city name
async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    /* I had to change the API because the MetaWeather API is not working. I looked on forums 
    and GitHub for a solution and unfortunately I had to change the API */
    const apiKey = "d65a49a0f7d8c6734668a3cb73c5af88";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        displayErrorMessage(error.message);
    }
}

// Function to display weather data on the page
function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>Weather Forecast for: ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} km/h</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

// Function to display error message on the page
function displayErrorMessage(message) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `<p>${message}</p>`;
}

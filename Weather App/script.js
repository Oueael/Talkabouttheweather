document.getElementById("searchBtn").addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '543a038f2a6737096ed056d5198edbdd';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const weatherData = {
                cityName: data.name,
                temperature: `${data.main.temp}°F`,
                conditions: data.weather[0].description
            };
            displayWeather(weatherData);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Could not fetch weather data. Please try again later.');
        });
});

function displayWeather(data) {
    document.getElementById("cityName").textContent = data.cityName;
    document.getElementById("temperature").textContent = data.temperature;
    document.getElementById("conditions").textContent = data.conditions;
}

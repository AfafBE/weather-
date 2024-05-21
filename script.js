document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeather(city) {
    const apiKey = 'd9461a43e8317556630d871bc7e19a6e'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data');
        });
}

function displayWeather(data) {
    document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('description').innerText = data.weather[0].description;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
}

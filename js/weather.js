const API_KEY = "586d2283d738a7c65837425cbfcf96ef";

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}도`;
    });
}

function fail() {
    alert("We can't find you. Where are you?");
}

navigator.geolocation.getCurrentPosition(success, fail);
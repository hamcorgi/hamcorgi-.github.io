const API_KEY = "73d57bf59fe6f2e717e937ded1723e59";


function Success(position){

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} ${Math.floor(data.main.temp)}º`; 
    });
}
function error(){

        alert("cant find you");
}
navigator.geolocation.getCurrentPosition(Success,error)
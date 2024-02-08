

const API_KEY = "4bfde5c44fbfe96abd576a55978a4bde";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(API_URL  +city + `&appid=${API_KEY}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    
        switch(data.weather[0].main) {
            case 'Clouds' : 
                weatherIcon.src = "images/clouds.png";
                break;
    
            case 'Clear' : 
                weatherIcon.src = "images/clear.png";
                break;
    
            case 'Rain' : 
                weatherIcon.src = "images/rain.png";
                break;
    
            case 'Drizzle' : 
                weatherIcon.src = "images/drizzle.png";
                break;
    
            case 'Mist' : 
                weatherIcon.src = "images/mist.png";
                break;
        }
    
        document.querySelector(".weather").style.display="block";
    }

   
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


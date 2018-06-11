function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}


const apiKey= "<YOUR API KEY HERE>";
const ul = document.getElementById('weather');
const url = `http://api.openweathermap.org/data/2.5/forecast?id=8010448&units=metric&appid="${apiKey}`;
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    //current header
    document.getElementById("cityName").textContent = data.city.name;
    document.getElementById("currentWeatherIcon").src = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    document.getElementById("currentWeatherState").textContent = data.list[0].weather[0].main;
    document.getElementById("currentWeatherDesc").textContent = data.list[0].weather[0].description;
    document.getElementById("currentWeatherTemp").textContent = `${data.list[0].main.temp} °C`;

    // day one
    document.getElementById("weatherBottomOneDay").textContent = data.list[0].dt_txt;
    document.getElementById("weatherBottomOneIcon").src = `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    document.getElementById("weatherBottomOneState").textContent = data.list[0].weather[0].main;
    document.getElementById("weatherBottomOneTemp").textContent = `${data.list[0].main.temp} °C`;
    
    // day two
    document.getElementById("weatherBottomTwoDay").textContent = data.list[8].dt_txt;
    document.getElementById("weatherBottomTwoIcon").src = `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    document.getElementById("weatherBottomTwoState").textContent = data.list[8].weather[0].main;
    document.getElementById("weatherBottomTwoTemp").textContent = `${data.list[8].main.temp} °C`;

    // day three
    document.getElementById("weatherBottomThreeDay").textContent = data.list[16].dt_txt;
    document.getElementById("weatherBottomThreeIcon").src = `http://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
    document.getElementById("weatherBottomThreeState").textContent = data.list[16].weather[0].main;
    document.getElementById("weatherBottomThreeTemp").textContent = `${data.list[16].main.temp} °C`;

    // day four
    document.getElementById("weatherBottomFourDay").textContent = data.list[24].dt_txt;
    document.getElementById("weatherBottomFourIcon").src = `http://openweathermap.org/img/w/${data.list[24].weather[0].icon}.png`;
    document.getElementById("weatherBottomFourState").textContent = data.list[24].weather[0].main;
    document.getElementById("weatherBottomFourTemp").textContent = `${data.list[24].main.temp} °C`;


    // day five
    document.getElementById("weatherBottomFiveDay").textContent = data.list[32].dt_txt;
    document.getElementById("weatherBottomFiveIcon").src = `http://openweathermap.org/img/w/${data.list[32].weather[0].icon}.png`;
    document.getElementById("weatherBottomFiveState").textContent = data.list[32].weather[0].main;
    document.getElementById("weatherBottomFiveTemp").textContent = `${data.list[32].main.temp} °C`;

})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   

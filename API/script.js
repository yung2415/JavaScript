fetch(
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc"
)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network response error");
    }
  })
  .then((data) => {
    console.log(data);
    displayWeather(data);
  })
  .catch((error) => {
    console.log("error"), error;
  });

const weatherContainer = document.getElementById("weather");

function displayWeather(data) {
  weatherContainer.innerHTML = "";
  const { generalSituation, weatherForecast } = data;
  document.getElementById("general").innerHTML = generalSituation;

  weatherForecast.reverse.map((element, i) => {
    const year = element.forecastDate.slice(0, 4);
    const month = element.forecastDate.slice(4, 6);
    const day = element.forecastDate.slice(6, 8);
    const week = element.week;
    const wind = element.forecastWind;
    const weather = element.forecastWeather;
    const maxTemp = element.forecastMaxtemp.value;
    const minTemp = element.forecastMintemp.value;
    const icon = element.ForecastIcon;

    const html = `      <div class="weatherCard" key=${i}>
        <h4>${year}年${month}月${day}日</h4>
        <h4>${week}</h4>
        <div>${`<img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${icon}.png" alt="Weather icon">`}</div>
        <p>${wind}</p>
        <p>${weather}</p>
        <p>最高溫度: ${maxTemp} °C</p>
        <p>最低溫度: ${minTemp} °C</p>
      </div>`;

    weatherContainer.insertAdjacentHTML("afterbegin", html);
  });
}

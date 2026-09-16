

const api = {
  key: "4c247b9965d852922945a07af347923c",
  base: "https://api.openweathermap.org/data/2.5/"
};

// Elements
const searchbox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const errorMessage = document.querySelector(".error-message");

// Enter key search
searchbox.addEventListener("keypress", setQuery);

// Button search
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    getResults(searchbox.value);
  });
}

function setQuery(event) {
  if (event.key === "Enter") {
    getResults(searchbox.value);
  }
}

// Fetch Weather
async function getResults(query) {

  query = query.trim();

  if (!query) {
    errorMessage.innerText = "Please enter a city name.";
    return;
  }

  errorMessage.innerText = "Loading weather...";

  try {

    const url =
      `${api.base}weather?q=${encodeURIComponent(query)}&units=metric&appid=${api.key}`;

    console.log("Requesting:", url);

    const response = await fetch(url);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("API Response:", data);

    if (!response.ok) {

      if (response.status === 401) {
        throw new Error(
          "Invalid API key. Please check your OpenWeather API key."
        );
      }

      if (response.status === 404) {
        throw new Error(
          "City not found. Please enter a valid city name."
        );
      }

      if (response.status === 429) {
        throw new Error(
          "API request limit reached. Please try again later."
        );
      }

      throw new Error(
        data.message || "Weather service error."
      );
    }

    displayResults(data);

  } catch (error) {

    console.error("Weather Error:", error);

    if (error.name === "TypeError") {
      errorMessage.innerText =
        "Unable to connect to the weather service. Check your internet connection.";
    } else {
      errorMessage.innerText = error.message;
    }
  }
}


// Display Weather
function displayResults(weather) {

  // City
  const city = document.querySelector(".location .city");

  city.innerText =
    `${weather.name}, ${weather.sys.country}`;


  // Date
  const date = document.querySelector(".location .date");

  date.innerText =
    dateBuilder(new Date());


  // Temperature
  const temp = document.querySelector(".temp");

  temp.innerHTML =
    `${Math.round(weather.main.temp)}<span>°C</span>`;


  // Weather Condition
const weatherEl =
  document.querySelector(".weather");

  weatherEl.innerText =
    weather.weather[0].main;


  // Weather Description
  const description =
    document.querySelector(".weather-description");

  if (description) {

    description.innerText =
      capitalizeWords(
        weather.weather[0].description
      );
  }


  // Humidity
  const humidity =
    document.querySelector(".humidity");

  if (humidity) {

    humidity.innerText =
      `${weather.main.humidity}%`;
  }


  // Feels Like
  const feelsLike =
    document.querySelector(".feels-like");

  if (feelsLike) {

    feelsLike.innerText =
      `${Math.round(weather.main.feels_like)}°C`;
  }


  // Minimum Temperature
  const minTemp =
    document.querySelector(".min-temp");

  if (minTemp) {

    minTemp.innerText =
      `${Math.round(weather.main.temp_min)}°C`;
  }


  // Maximum Temperature
  const maxTemp =
    document.querySelector(".max-temp");

  if (maxTemp) {

    maxTemp.innerText =
      `${Math.round(weather.main.temp_max)}°C`;
  }


  // Old Hi-Low
  const hilow =
    document.querySelector(".hi-low");

  if (hilow) {

    hilow.innerText =
      `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
  }


  // Weather Icon
  const weatherEmoji =
    document.querySelector(".weather-emoji");

  if (weatherEmoji) {

    weatherEmoji.innerText =
      getWeatherIcon(weather.weather[0].main);
  }


  // Clear error
  errorMessage.innerText = "";
}


// Weather Icons
function getWeatherIcon(condition) {

  const icons = {

    Clear: "☀️",

    Clouds: "☁️",

    Rain: "🌧️",

    Drizzle: "🌦️",

    Thunderstorm: "⛈️",

    Snow: "❄️",

    Mist: "🌫️",

    Smoke: "🌫️",

    Haze: "🌫️",

    Dust: "🌪️",

    Fog: "🌫️",

    Sand: "🌪️",

    Ash: "🌋",

    Squall: "💨",

    Tornado: "🌪️"
  };

  return icons[condition] || "🌤️";
}


// Capitalize Description
function capitalizeWords(text) {

  return text
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() +
      word.slice(1)
    )
    .join(" ");
}


// Date Builder
function dateBuilder(date) {

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const day = days[date.getDay()];

  const dayNumber = date.getDate();

  const month = months[date.getMonth()];

  const year = date.getFullYear();

  return `${day}, ${dayNumber} ${month} ${year}`;
}


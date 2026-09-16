# 🌤️ WeatherNow — Real-Time Weather Application

A modern and responsive **Weather Application** built using **HTML, CSS, and JavaScript** that fetches real-time weather information using the **OpenWeather API**.

Users can search for any city and view important weather details such as temperature, weather condition, humidity, feels-like temperature, and minimum/maximum temperature.

## 🚀 Live Demo

👉 https://vanshika2723.github.io/weather-application/

## 📌 Project Overview

WeatherNow provides a simple and attractive interface for checking current weather information for different cities.

The application uses JavaScript and the OpenWeather API to fetch live weather data and dynamically update the webpage without reloading it.

## ✨ Features

* 🔍 Search weather by city name
* 🌡️ Real-time temperature
* 🌤️ Current weather condition
* 📝 Weather description
* 💧 Humidity information
* 🤗 Feels-like temperature
* ⬇️ Minimum temperature
* ⬆️ Maximum temperature
* ☀️ Dynamic weather icons
* ⚠️ Error handling for invalid cities and API errors
* ⌨️ Search using the Enter key
* 📱 Responsive design
* 🎨 Modern glassmorphism-style UI

## 🛠️ Technologies Used

* **HTML5** — Page structure
* **CSS3** — Styling, responsive layout and visual design
* **JavaScript (ES6+)** — API integration and DOM manipulation
* **OpenWeather API** — Real-time weather data
* **GitHub Pages** — Project deployment

## 🔄 How It Works

1. Enter a city name in the search box.
2. JavaScript sends a request to the OpenWeather API.
3. The API returns the current weather information.
4. JavaScript processes the response.
5. Weather details are dynamically displayed on the webpage.

## 📊 Weather Information Displayed

The application displays:

* City and country
* Current temperature
* Weather condition
* Weather description
* Humidity
* Feels-like temperature
* Minimum temperature
* Maximum temperature
* Current date

## ⚠️ Error Handling

The application handles different API situations, including:

* Empty city search
* Invalid API key
* City not found
* API request limit
* Weather service errors
* Network connection problems

## 📂 Project Structure

```text
weather-application/
│
├── index.html
├── main.css
├── main.js
└── README.md
```

## 💻 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/vanshika2723/weather-application.git
```

### 2. Open the project

```bash
cd weather-application
```

### 3. Add your API key

Open `main.js` and configure your OpenWeather API key.

```javascript
const api = {
  key: "YOUR_API_KEY",
  base: "https://api.openweathermap.org/data/2.5/"
};
```

### 4. Run the project

Open `index.html` in your browser, or use the **Live Server** extension in VS Code.

## 🔐 API Key Security

For production applications, API keys should not be exposed directly in publicly accessible frontend source code.

For a deployed production version, use a backend/server-side environment variable or another secure API-key strategy.

## 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet



## 📚 Learning Outcomes

Through this project, I learned how to:

* Work with REST APIs
* Use JavaScript `fetch()` for API requests
* Handle asynchronous operations with `async/await`
* Process JSON API responses
* Manipulate webpage content using DOM methods
* Handle API and network errors
* Build responsive user interfaces
* Create dynamic weather information displays
* Deploy a frontend project using GitHub Pages



⭐ If you find this project useful, consider giving it a star!

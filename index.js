// Define your API key from OpenWeatherMap
const apiKey = 'f9a8e5cc98e4c5472726c8c3a4736a8d';

// Function to fetch weather data
async function getWeatherByCity(cityName) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
      const data = await response.json();
  
      // Extract relevant information from the response
      const { name, main: { temp, humidity }, weather } = data;
  
      // Convert temperature from Kelvin to Celsius and round it to one decimal place
      const temperature = (temp - 273.15).toFixed(1);
  
      // Get the first weather condition from the array
      const skyStatus = weather.length > 0 ? weather[0].description : 'N/A';
  
      // Return the extracted data
      return {
        cityName: name,
        temperature: temperature,
        humidity: humidity,
        skyStatus: skyStatus
      };
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }


function submit(){
    console.log(document.getElementById("input").value)
    getWeatherByCity(document.getElementById("input").value)
  .then(weatherData => {
    document.getElementById("city_name").innerHTML =weatherData.cityName;
    document.getElementById("temp").innerHTML = weatherData.temperature;
    document.getElementById("sky").innerHTML = weatherData.skyStatus;
    console.log(weatherData);
    // Use the weather data as per your requirements
  })
  .catch(error => {
    console.error(error);
  });
 
}
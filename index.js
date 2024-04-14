
//1st version/written by myself
const axios = require('axios');
require('dotenv').config();   //!!!

const params = {
  access_key: process.env.API_KEY,
  query: process.argv[2]
}

axios.get('http://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
   // console.log(apiResponse)
    console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });
  
  
  
//2nd version// it's not my code; but it s working haha//

// const http = require('http');
// const querystring = require('querystring');

// const API_KEY = process.env.API_KEY 

// function fetchWeather(location) {
//     return new Promise((resolve, reject) => {
//         const params = {
//             access_key: API_KEY,
//             query: location,
//         };

//         const options = {
//             hostname: 'api.weatherstack.com',
//             path: `/current?${querystring.stringify(params)}`,
//             method: 'GET'
//         };

//         const req = http.request(options, (res) => {
//             let data = '';

//             res.on('data', (chunk) => {
//                 data += chunk;
//             });

//             res.on('end', () => {
//                 resolve(JSON.parse(data));
//             });
//         });

//         req.on('error', (error) => {
//             reject(error);
//         });

//         req.end();
//     });
// }

// async function main() {
//     const location = process.argv[2];
//     if (!location) {
//         console.error('Please provide a city name as an argument.');
//         return;
//     }

//     try {
//         const weatherData = await fetchWeather(location);
//         if (weatherData.error) {
//             console.log(`Error: ${weatherData.error.info}`);
//         } else {
//             console.log('Weather information:');
//             console.log(`Location: ${weatherData.location.name}`);
//             console.log(`Temperature: ${weatherData.current.temperature}°C`);
//             console.log(`Description: ${weatherData.current.weather_descriptions[0]}`);
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// main();


//node index.js "city_name"


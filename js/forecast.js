const key = 'N1hmYFFvnHTUbKtS2H10rxbAAJMGHJ15';

//for getting the city Key value
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const cityDets = await response.json();

    return cityDets[0];
};

//for getting the city weather conditions using its Key value
const getWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const weatherDets = await response.json();

    return weatherDets[0];
};


//To check working of forecast.js
/* getCity('manchester').then(cityDets => {
    return getWeather(cityDets.Key);
}).then(weatherDets => {
    console.log(weatherDets);
}).catch(err => console.log(err)); */

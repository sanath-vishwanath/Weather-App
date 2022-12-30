const form = document.querySelector('.form');
const card = document.querySelector('.card');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const details = document.querySelector('.details');

const updateDets = data => {
    
    /* Destructuring...same as 
    const cityDets = data.cityDets, const weatherDets = data.weatherDets */
    const { cityDets, weatherDets } = data;

    details.innerHTML = `
    <h2 class="h2 city">${cityDets.EnglishName}</h2>
    <h3 class="h3 condition">${weatherDets.WeatherText}</h3>
    <div class="temperature">
        <span>${weatherDets.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    const iconNumber = `img/icons/${weatherDets.WeatherIcon}.svg`;
    icon.setAttribute('src', iconNumber);

    const timeSrc = weatherDets.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const getDets = async (city) => {

    const cityDets = await getCity(city);
    const weatherDets = await getWeather(cityDets.Key);

    /* object shorthand notation when property and value have same name
    same as return {cityDets: cityDets, weatherDets: weatherDets} */
    return { cityDets, weatherDets };
};

form.addEventListener('submit', e => {

    e.preventDefault();
    const city = form.search.value.trim();
    form.reset();

    getDets(city)
        .then(data => updateDets(data))
        .catch(err => console.log(err));
});
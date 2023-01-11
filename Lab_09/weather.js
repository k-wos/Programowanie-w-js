const card = document.getElementById("card");
const submit = document.getElementById("submit");
const input = document.getElementById("cityName");


function saveCity(){
  localStorage.setItem('city', JSON.stringify(input));
}
submit.addEventListener('click', function(){
  const city = input.value;
  
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ba8a44cc3e29fadbb7c98a3929eea5bb')
.then(response => response.json())
.then(data => {
  const tempValue = data.main.temp;
  const humidity = data.main.humidity;
  const weather = data.weather[0].main;
  let iconClass = '';

 if(weather === 'Clear'){
  iconClass = 'sunny';
 }else if(weather ==='Clouds'){
  iconClass = 'cloudy';
 }else if(weather ==="Rain"){
  iconClass="rainy";
 }else if(weather === "Snow"){
  iconClass = "snowy";
 }

 card.innerHTML = `
 <h1>${city}</h2>
 <p> Temperatura: ${tempValue}</p>
 <p> Wilgotność: ${humidity}</p>
 <p class="{iconClass}">${weather}</p>`;

})

.catch(err => alert("Brak lub zła nazwa miasta"));
})

const addCityButton = document.getElementById("addCity");
const cityList = document.getElementById("cityList");

addCityButton.addEventListener("click", function(){
  const city = input.value;
  if(cityList.childNodes.length >= 10){
    alert("Możesz zapisać jedynie 10 miast");
    return;
  }

  const cityItem = document.createElement('li');
  cityItem.innerHTML = city;
  cityList.appendChild(cityItem);
  saveCity(city)

})
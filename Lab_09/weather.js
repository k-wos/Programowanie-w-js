var input = document.querySelector('.cityName');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ba8a44cc3e29fadbb7c98a3929eea5bb')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var humidityValue = data['main']['humidity'];

  main.innerHTML = nameValue;
  humidity.innerHTML = "Wilgotność - "+humidityValue;
  temp.innerHTML = "Temperatura - "+tempValue;
  input.value ="";

})

.catch(err => alert("Brak lub zła nazwa miasta"));
})
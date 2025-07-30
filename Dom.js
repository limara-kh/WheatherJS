
let temp = document.getElementById('temp')
let cities = document.getElementById('cities')
let search = document.getElementById('search')
let img = document.getElementById('img')
let wind = document.getElementById('wind')
let data1 = document.getElementById('data1')
let him = document.getElementById('him')
let weather = {
  temp: '',
  name: '',
  wind: '', 
  him: '',
  data1: '',
  img:''
}
let last_data = JSON.parse(localStorage.getItem('weather'))
temp.textContent = "Температурасы: " +last_data.temp + "°C"
wind.textContent = "Жел жылдамдығы: " + last_data.wind + " км/сағ"
him.textContent = "Ылғалдылық: " + last_data.him + "%"
data1.textContent = "Жаңартылған уақыты: " + last_data.data1
img.src= "https:" + last_data.img
search.addEventListener('click', function() {
  let city = cities.value
  fetch(`https://api.weatherapi.com/v1/current.json?key=0a447dc803d64e249b192310252903&q=${city}&aqi=no`)
      .then(response => response.json())
      .then(data => {
          temp.textContent = "Температурасы: " + data.current.temp_c + "°C"
          wind.textContent = "Жел жылдамдығы: " + data.current.wind_kph + " км/сағ"
          img.src = "https:" + data.current.condition.icon
          him.textContent = "Ылғалдылық: " + data.current.humidity + "%"
          data1.textContent = "Жаңартылған уақыты: " + data.current.last_updated
         
          weather.wind = data.current.wind_kph
          weather.temp = data.current.temp_c
          weather.him = data.current.humidity
          weather.data1 = data.current.last_updated
          weather.img = data.current.condition.icon
          localStorage.setItem('weather', JSON.stringify(weather))
      })
      .catch(error => console.log(error))
})

var goBtn = document.querySelector('.goBtn');
var requestUrl = 'https://api.github.com/users/ewaltho/repos'

goBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    var hiddenContent = document.getElementsByClassName('results');
    var cityNameSearch = document.getElementById('input').value;
    //add line to clear search value to be empty upon submit
    var cityText = document.getElementById('city');
    var APIKey = '57cf35bb4ba11b5c26dba9f423cf261f';
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityNameSearch + '&appid=' + APIKey + '&units=imperial';
    var hiddenEl = document.getElementById('hidden');
    var hiddenResults = document.getElementById('results');
    var weatherIcon = document.getElementById('statusIcon');
    
    cityText.textContent = cityNameSearch;
    hiddenEl.classList.remove('hide');
    hiddenResults.classList.remove('hide');
    
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
            var dayStatus = document.querySelector('.dayStatus')
            var dayTemp = document.querySelector('.dayTemp')
            var temperature = document.getElementById('temperature')
            var wind = document.getElementById('wind')
            var humidity = document.getElementById('humidity')
            console.log(data)
            var roundedWind = Math.floor(data.list[0].wind.speed)
            var roundedTemp = Math.floor(data.list[0].main.temp)
            var dayTemp = document.querySelector('.dayTemp')
            var weekday = document.querySelector('.weekday');
            
            temperature.textContent = 'Temperature: ' + roundedTemp
            humidity.textContent = 'Humidity: ' + data.list[0].main.humidity;
            wind.textContent = 'Wind Speed: ' + roundedWind;
            
            for (var i = 0; i < 5; i++) {
                // var iconEl = document.querySelector('.statusIcon').src
                // var statusIcon = data.list[i].weather[0].icon
                
                // iconEl.src = "http://openweathermap.org/img/wn/10b@2x.png"

                weekday.textContent = data.list[i].dt_txt;
                dayStatus.textContent = data.list[i].weather[0].description
                dayTemp.textContent = roundedTemp
            }
        })

})

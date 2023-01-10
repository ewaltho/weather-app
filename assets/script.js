var goBtn = document.querySelector('.goBtn')

var cityName = document.querySelector('.input').value
var APIKey = '57cf35bb4ba11b5c26dba9f423cf261f'
var requestUrl = 'api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={API key}' 
var cityText = document.getElementById('#city')


function getApi(){ 
    fetch(requestUrl)
        .then(function (response) {
            return(response).json();
        })
        .then(function (data) {
            console.log(data)
        })
    }
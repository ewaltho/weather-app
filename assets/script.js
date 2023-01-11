var goBtn = document.querySelector('.goBtn');
var requestUrl = 'https://api.github.com/users/ewaltho/repos' 


goBtn.addEventListener('click', function(event){
    event.preventDefault();
    var hiddenContent = document.getElementsByClassName('results');
    var cityNameSearch = document.getElementById('input').value
    //add line to clear search value to be empty upon submit
    var cityText = document.getElementById('city')
    var APIKey = '57cf35bb4ba11b5c26dba9f423cf261f'
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityNameSearch + '&appid=' + APIKey 
    var hiddenEl = document.getElementById('hidden')
    cityText.textContent = cityNameSearch;
    hiddenEl.classList.remove('hide');
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })


})

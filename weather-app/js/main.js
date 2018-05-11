// global elements

var cityElem = document.querySelector('.city span');
var countryElem = document.querySelector('.city small');
var currTemp = document.querySelector('.currTemp');
var weatherCond = document.querySelector('.description');
var unitVal = document.getElementById('convert');
var tempVal;

var geo_options = {
    enableHighAccuracy: true,
    maximumAge: 4000,
    timeout: 4000
};


window.onload = getGeoLocation;
document.getElementById('convert').addEventListener('click', function () {
    var text = this.getAttribute('data-degree');
    celToFaranheit(tempVal, text)
})


// function declarations
function geo_success(position) {
    var url = `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function (success) {
        var resp = JSON.parse(xhr.response);
        cityElem.innerHTML = resp.name;
        countryElem.innerHTML = resp.sys.country;
        tempVal = resp.main.temp;
        currTemp.innerHTML = tempVal;
        weatherCond.innerHTML = resp.weather[0].main;
    }
    xhr.send();
}

function geo_error() {
    alert("Sorry, no position available.");
}


function getGeoLocation() {
    if ('geolocation' in navigator) {
        var wpid = navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
        return wpid;
    }
    else {
        alert('Geolocation not supported')
    }
}



function celToFaranheit(temp, degree) {
    if (degree == 'C') {
        currTemp.innerHTML = (temp * 9 / 5 + 32);
        document.getElementById('convert').setAttribute('data-degree', 'F')
        unitVal.innerHTML = '&deg;F';
    } else {
        currTemp.innerHTML = tempVal;
        document.getElementById('convert').setAttribute('data-degree', 'C')
        unitVal.innerHTML = '&deg;C';
    }
}
window.onload = getGeoLocation;
function geo_success(position) {
    //do_something(position.coords.latitude, position.coords.longitude);
    var url = `https://fcc-weather-api.glitch.me/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`;

    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload = function(success){
        console.log(JSON.parse(xhr.response))
    }
    xhr.send();
}

function geo_error() {
    alert("Sorry, no position available.");
}

var geo_options = {
    enableHighAccuracy: true,
    maximumAge: 4000,
    timeout: 4000
};


function getGeoLocation() {
    if ('geolocation' in navigator) {
        var wpid = navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
        return wpid;
    }
    else {
        alert('Geolocation not supported')
    }
}
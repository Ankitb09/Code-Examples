var inputElem = document.querySelector('.custom-search');
var submitBtn = document.getElementById('submitBtn');

function setup(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + inputElem.value + "&prop=info&inprop=url&utf8=&format=json",);
    xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
    xhr.send();
    xhr.onload = function(){
        console.log(xhr.responseText)
    }
}
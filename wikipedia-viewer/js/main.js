var inputElem = document.querySelector('.custom-search');
var submitBtn = document.getElementById('submitBtn');

function setup(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + inputElem.value + "&limit=10",);
    //xhr.setRequestHeader( 'Api-User-Agent', '' );
    xhr.send();
    xhr.onload = function(){
        if (xhr.status === 200) {
           var wikitext = JSON.parse(xhr.responseText);
            console.log(wikitext)
            //showScreen(wikitext);  
          }
          else {
            console.log('Request failed.  Returned status of ' + xhr.status);
          }
    }
}
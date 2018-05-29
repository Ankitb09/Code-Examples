var inputElem = document.querySelector('.custom-search');
var submitBtn = document.getElementById('submitBtn');

var formElem = document.getElementById('searchForm');

window.onload = init;

function init(){
    formElem.addEventListener('submit',function(e){
        setup();
        e.preventDefault();
    })
}

function reset(){
    
}


function setup() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + inputElem.value + "&limit=10", );
    //xhr.setRequestHeader( 'Api-User-Agent', '' );
    xhr.send();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var wikitext = JSON.parse(xhr.responseText);
            showScreen(wikitext);
        }
        else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    }
}

function showScreen(resp) {
    var keyStr = resp[0];
    var titleArr = resp[1];
    var descArr = resp[2];
    var linkArr = resp[3];

    document.querySelector('.overlay h2').innerHTML = 'Result for ' + keyStr;
    var elem = document.querySelector('.overlay ul');
    for(var i=0;i<titleArr.length;i++){
        elem.innerHTML += '<li><h3><a target="_blank" href="'+ linkArr[i] +'">'+titleArr[i] +'</a></h3><p>'+ descArr[i] +'</p></li>';
    }
}
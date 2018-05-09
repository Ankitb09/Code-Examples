const URL = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

window.onload = setup;


function setup() {
    var quoteElem = document.querySelector('.blockquote p');
    var authorName = document.querySelector('.blockquote-footer');
    ajaxReq(quoteElem,authorName);

    document.getElementById('next').onclick = function(){
    ajaxReq(quoteElem,authorName);
        
    }
    
}

function ajaxReq(quoteElem,authorName){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', URL,false);
    xhr.onload = function (request) {
        var response = request.currentTarget.response || request.target.responseText;
        var resp = JSON.parse(response);
        quoteElem.innerHTML = resp[0].content;
        authorName.innerHTML = resp[0].title;
    }
    xhr.send();
}
// global elements
function setUp(){
    var formElem = document.getElementsByTagName('form')[0];
    var xhr = new XMLHttpRequest();
    xhr.open('POST','https://reqres.in/api/users',true);
    xhr.send();
}
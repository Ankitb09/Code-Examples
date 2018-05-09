// global variable go here
var timer = 0;
var resetTime;
var appStarted = false;

// execute functions here
window.onload = setUp;

// function defination goes here
function startTimer() {
    if (appStarted == false) {
        resetTime = setInterval(function () {
            timer += 0.01;
            document.getElementById('timer').innerHTML = timer.toFixed(2);
        }, 10)

        appStarted = true;
    } else {
        clearInterval(resetTime)
        appStarted = false;
    }

}

function reset(){
    timer = 0;
    appStarted = false;
    clearInterval(resetTime);
    document.getElementById('timer').innerHTML = '';
    document.getElementById('pastTime').innerHTML = '';
}

function setUp() {
    var startBtn = document.getElementById("start");
    var resetBtn = document.getElementById("restart");
    var recordBtn = document.getElementById("record");

    resetBtn.onclick = function () {
        reset()
    }

    recordBtn.onclick = function () {
        if (appStarted == true) {
            var pastTimeElem = document.getElementById('pastTime');
            pastTimeElem.innerHTML += `<li>${timer.toFixed(2)}</li>`
        }

    }
    startBtn.onclick = function () {
        startTimer()
    }

    document.addEventListener('keydown', function (event) {
        if (event.key == 's') {
            startBtn.click()
        } else if (event.key == 't') {
            recordBtn.click()
        } else if (event.key == 'r') {
            resetBtn.click()
        }
    })
    
}
// var audio = document.getElementById("myAudio");
// var clockDisplay = document.querySelector('.text-light');
// var lapContainer = document.getElementById('lapTimes');
// var isRunning = false;
// var lapCount = 1;
// var interval;
// function startStopwatch() {
//   if (!isRunning) {
//     isRunning = true;
//     interval = setInterval(updateClock, 1000);
//     audio.play();
//   }
// }
// function stopStopwatch() {
//   if (isRunning) {
//     isRunning = false;
//     clearInterval(interval);
//     audio.pause();
//     audio.currentTime = 0;
//   }
// }
// function pauseStopwatch() {
//   if (isRunning) {
//     isRunning = false;
//     clearInterval(interval);
//     audio.pause();
//   }
// }
// function resetStopwatch() {
//   stopStopwatch();
//   lapContainer.innerHTML = '';
//   lapCount = 1;
//   clockDisplay.textContent = '00:00:00';
// }
// function lapStopwatch() {
//   var lapTime = document.createElement('p');
//   lapTime.textContent = 'Lap ' + lapCount + ': ' + clockDisplay.textContent;
//   lapContainer.appendChild(lapTime);
//   lapCount++;
// }
// function updateClock() {
//   var currentTime = clockDisplay.textContent.split(':');
//   var hours = parseInt(currentTime[0], 10);
//   var minutes = parseInt(currentTime[1], 10);
//   var seconds = parseInt(currentTime[2], 10);
//   seconds++;
//   if (seconds === 60) {
//     seconds = 0;
//     minutes++;
//     if (minutes === 60) {
//       minutes = 0;
//       hours++;
//       if (hours === 24) {
//         hours = 0;
//       }
//     }
//   }
//   clockDisplay.textContent =
//     padZero(hours) + ':' +
//     padZero(minutes) + ':' +
//     padZero(seconds);
// }
// function padZero(num) {
//   return (num < 10 ? '0' : '') + num;
// }

// function playAudio() {
//     var audio = document.getElementById("myAudio");
//     audio.play();
//   }

let ms = 0, s = 0, m = 0, h = 0
let timer;

let display = document.querySelector(".timer-Display")
let laps = document.querySelector(".laps")


function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
    display.innerHTML = getTimer()
    ms++              
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    if(h == 13){
        h = 1
    } 
}

function getTimer(){
    return (h<10 ? "0" + h: h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms); 
}



function pause(){
    stopTimer()  
}

function stopTimer(){
    clearInterval(timer)
    timer = false 
}




function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}




function restart(){
    if(timer){ 
        reset()
        start()
        lap()
    }
    
}


// lap = taking screenshot of current time...
function lap() {
    if(timer) {   
        let Li = document.createElement("li")   
        Li.innerHTML = getTimer() 
        laps.appendChild(Li) 
    }
}

function resetLap(){
    laps.innerHTML = ""
}
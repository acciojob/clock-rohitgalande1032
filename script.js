//your JS code here. If required.
let timerDisplay = document.getElementById("timer");

setInterval(function(){
	timerDisplay.innerHTML = new Date().toLocaleString();
}, 1000)


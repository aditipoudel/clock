const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");

let hour, minute, second;  // for the need of declaration
function getTime() {
    hour = new Date().getHours();
    minute = new Date().getMinutes();
    second = new Date().getSeconds();
  }// and then set in variables

  function renderTime() {
    getTime();
    hoursDiv.innerHTML = hour;
  minutesDiv.innerHTML = minute;
  secondsDiv.innerHTML = second;
}
setInterval(renderTime, 1000);




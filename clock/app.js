const hoursDiv = document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const secondsDiv = document.getElementById("seconds");
//for the date
a =  new Date();
b = a.getFullYear();
c = a.getMonth() + 1;
d = a.getDate();
document.getElementById("date").innerHTML = c + "-" + d + "-" + b;


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




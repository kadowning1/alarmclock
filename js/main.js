var alarmSet = null; /*setting variables to zero*/
var alarmOut = null;

setInterval(myFunction, 1000); /*function to make clock not refresh and update*/

function myFunction() {
  /*function to produce current time*/
  {
    var currentDate = new Date(); /* creating the date*/

    var hour = currentDate.getHours(); /*uses local time according to MDN*/
    var min = currentDate.getMinutes();
    var sec = currentDate.getSeconds();
    var ampm = "";


    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
    ampm = dayNight(ampm);
  }

  function changeTime(i) {
    /*adding zeros to all var if under 10*/
    if (i < 10) {
      return "0" + i;
    } else {
      return i
    }

  }

  function dayNight(hour) {
    /*attempting to add am/pm*/
    if (hour < 12) {
      return "PM";
    } else {
      return "AM"
    }
  }

  var digitalClock = hour + " : " + min + " : " + sec + ampm

  document.getElementById("time").innerHTML = digitalClock; /* adding to the html div.  this part took me the longest to figure out */

}

myFunction(); /*calling the function*/


function setAlarmOff(value) { /*function for user to input time through html*/
  alarmSet = value;
}
function wakeUp(){ /*function to go off after time is zero in setAlarm function*/
    alert('Loud Noises');
}
function setAlarm() { /*function to set alarm by pulling the Date and comparing the two variables*/
  if (alarmSet) {
    var currentTime = new Date;
    var timeToAlarm = new Date(alarmSet);
  };

  if (timeToAlarm > currentTime) {
    var timeOut = timeToAlarm.getTime() - currentTime.getTime();
    console.log(timeOut);
    alarmOut = setTimeout(wakeUp, timeOut);
    alert("Alarm set!");
  }

}

function clearAlarm() {
  /*function to clear out time after setAlarm function is complete*/
  if (alarmOut) {
    clearTimeout(alarmOut);
    alert("Alarm Cleared");
  }
}

function snoozeAlarm() {
  /*wanted to add 5 minutes snooze but failed at other function so didnt get to it */
  alert("No, Just Wake Up!");
}



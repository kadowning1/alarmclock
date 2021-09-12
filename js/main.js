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

    hour = changeTime(hour);
    min = changeTime(min);
    sec = changeTime(sec);
  }

  function changeTime(i) {
    /*adding zeros to all var if under 10*/
    if (i < 10) {
      return "0" + i;
    } else {
      return i
    }
  }
  var digitalClock = hour + " : " + min + " : " + sec

  document.getElementById("time").innerHTML = digitalClock; /* adding to the html div.  this part took me the longest to figure out */
}

myFunction(); /*calling the function*/

function setAlarmOff(value) {
  /*function for user to input time through html*/
  alarmSet = value; /*set to value which user picks*/
}

function wakeUp() {
  /*function to go off after time is zero in setAlarm function*/
  alert('Loud Noises'); /*placed before setAlarm function to have it aler if current time to Alarm is equal to current time*/
}

function setAlarm() {
  /*function to set alarm by pulling the Date and comparing the two variables*/
  if (alarmSet) { //if alarm has been set
    var currentTime = new Date; //establish variables for current time
    var timeToAlarm = new Date(alarmSet); //establish variable for alarm
  };

  if (timeToAlarm > currentTime) { //if the alarm is set and greater than current Time
    var timeOut = timeToAlarm.getTime() - currentTime.getTime(); //subtract the two times to get the alarm length
    console.log(timeOut); //checking timeOut variable 
    alarmOut = setTimeout(wakeUp, timeOut); //function to alert when time is achieved
    alert("Alarm set!"); //alert when alarm set
  }

}

function clearAlarm() {
  /*function to clear out time if alarm is not needed*/
  if (alarmOut) { //if there alarmOut has happened
    clearTimeout(alarmOut); //clear the timeout
    alert("Alarm Cleared"); //alert
  }
}

function snoozeAlarm() {
  /*wanted to add 5 minutes snooze but failed at other function so didnt get to it */
  alert("No, Just Wake Up!"); //alert
}

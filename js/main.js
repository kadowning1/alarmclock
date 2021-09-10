setInterval(myFunction, 1000); /*function to make clock not refresh and update*/

function myFunction() { /*function to produce current time*/
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
  var digitalClock = hour + " : " + min + " : " + sec + " : " + ampm

    document.getElementById("time").innerHTML = digitalClock; /* adding to the html div.  this part took me the longest to figure out */

}

function setAlarm() { /*this is the function holding me back*/
  let hour = 07
  let min = 38
  let sec = 00
  let ampm = "PM"
  let digitalClock = (hour + min + sec + ampm)
  console.log(digitalClock);

  if (digitalClock === digitalClock) /*looking for something along these lines but need some sort of variable to set alarm*/
    alert("Wake up!");
  else
    alert("Keep Sleeping");
}

function clearAlarm() { /*function to clear out time after setAlarm function is complete*/
  clearInterval(setAlarm, 500);
  alert("Alarm Cleared");
}

function snoozeAlarm() { /*wanted to add 5 minutes snooze but failed at other function so didnt get to it */
  alert("No, Just Wake Up!");
}


setTimeout(myFunction, 3000);
myFunction(); /*calling the function*/

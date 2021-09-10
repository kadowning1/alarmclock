setInterval (myFunction, 1000); /*function to make clock not refresh and update*/

function myFunction() {{
  var currentDate = new Date(); /* creating the date*/
  
  var hour = currentDate.getHours(); /*uses local time according to MDN*/
  var min = currentDate.getMinutes();
  var sec = currentDate.getSeconds();
  var ampm = "AM";


  hour = changeTime(hour);
  min = changeTime(min);
  sec = changeTime(sec);
  ampm = dayNight(ampm);

  var digitalClock = hour + " : " + min + " : " + sec + " : " + ampm

  document.getElementById("time").innerHTML = digitalClock; /* adding to the html div.  this part took me the longest to figure out */
}
function changeTime(i) { /*adding zeros to all var if under 10*/
  if (i < 10) {
    return "0" + i;
  } else {
    return i
  }

}
function dayNight (hour) { /*attempting to add am/pm*/
    if (hour < 12) {
    return ampm;
    }
    else {
        return "PM"
    }
}

}
setTimeout(myFunction, 3000);
myFunction(); /*calling the function*/



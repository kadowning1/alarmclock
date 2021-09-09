function myFunction() {
    var currentDate = new Date();
    var h = currentDate.getHours();
    var m = currentDate.getMinutes();
    var s = currentDate.getSeconds();
    var timeClock = h + ":" m + ":" s;
    var currentLocalTime = timeClock.toLocaleTimeString();
    document.getElementsByID("time").innerHTML = h + ":" m + ":" s;
}
myFunction ();
window.onload = function() {
    var seconds = "00";
    var tens = "00";
    var appenTens = document.getElementById("tens");
    var appenSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    //todo create parameter is a store time
    var Interval;

    //todo create Event on click button start the time
    buttonStart.onclick = function() {
        // clear the time has a before
        clearInterval(Interval);
        //set interval and get function startTimer
        Interval = setInterval(startTimer, 10)
    }

    // todo create aEvent on click button stop the time
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    //todo create Event on click button reset the time
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appenTens.innerHTML = tens;
        appenSeconds.innerHTML = seconds;
    }

    // todo create function startTimer
    function startTimer() {
        tens++;

        if (tens < 9 ) {
            appenTens.innerHTML = "0" + tens;
        }
        // short if
        // appenTens.innerHTML = tens < 9 ? "0" + tens : tens;

        if (tens > 9 ) {
            appenTens.innerHTML = tens;
        }
         // short if
        // appenTens.innerHTML = tens < 9 ? tens : "";

        if (tens > 99) {
            seconds++;
            appenSeconds.innerHTML = "0" + seconds;
            //reset tens is 0
            tens = 0;
            appenTens.innerHTML = "0" + 0
        }

        if (seconds > 9){
            appenSeconds.innerHTML = seconds;
        }
        //short if
        // appenSeconds.innerHTML = seconds > 9 ? seconds : "";

    }
}
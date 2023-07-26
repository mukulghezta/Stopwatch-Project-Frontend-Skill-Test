// initializing variables
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

// start button function
function start(){
    timer = true;
    stopwatch();
}

// stop button function
function stopp(){
    timer = false;
}

// reset button function
function reset(){
    timer = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
}

// main timer function
function stopwatch(){
    if(timer==true){
        
        var hrString = hr < 10 ? "0" + hr : hr;
        var minString = min < 10 ? "0" + min : min;
        var secString = sec < 10 ? "0" + sec : sec;
        
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;

        sec = sec + 1;

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
 
        setTimeout("stopwatch()", 1000)
    }
}







function szeretlek(){
    var element = document.body;
    element.classList.toggle("szeretlek")
}

function szeretlek2(){
    var element2 = document.body;
    element2.classList.toggle("szeretlek2")
}

var countDownDate = new Date("Aug 20, 2020 00:00:01").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " nap " + hours + " óra " + minutes + " perc " + seconds + " másodperc ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Megvolt <3";
    }
}, 1000);

var countDownDate2 = new Date("Oct 24, 2020 00:00:01").getTime();
var x2 = setInterval(function() {
    var now2 = new Date().getTime();
    var distance2 = countDownDate2 - now2;
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    document.getElementById("countdown2").innerHTML = days2 + " nap " + hours2 + " óra " + minutes2 + " perc " + seconds2 + " másodperc ";
    if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("countdown2").innerHTML = "Megvolt <3";
    }
}, 1000);
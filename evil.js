
var theButton = document.getElementById("trollButton");

setInterval(() => {

    if (cookiesSave > 80000) {
        theButton.style.display = "inline-flex";

    } else {
        theButton.style.display = "none";
    }

}, 1000);


function troll() {
    $ps = 0;
    cookiesSave = 0;
}



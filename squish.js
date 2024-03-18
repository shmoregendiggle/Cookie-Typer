var squishTime = 25;
var squishness = 0;
const squishFactor = 50;
function squish(){
  if(squishTime < 30){
    squishness = ((squishFactor / (Math.pow(squishTime, 0.8))) * Math.sin(squishTime));
    squishTime+=0.16;
  }
  document.getElementById("spinningCookie").width = 200 + squishness;
  document.getElementById("spinningCookie").height = 200 - squishness;
  document.getElementById("spinningCookie").style.marginTop = 20 + (squishness/2) + "px";
}

var keysList="jfkdlsahg";
var keysInUse = localStorage.getItem("keysInUse");
//var keysInUse = `jfkdlsahg.?!,;\")(`;
var $ps = 0;
var sccn = [6, 15, 20];
var sccnIndex = 0;
var time = 0;
var chance = localStorage.getItem("chance");
if(chance == null){
  chance = (1/6)
}
if(keysInUse == null || keysInUse == ""){
  keysInUse = "j";
  localStorage.setItem("keysInUse", keysInUse);
}
sentance = generateText(3,5,4,6, upgradeItem3.bought == "true", upgradeItem4.bought == "true");
unwrittenText = sentance;
setInterval(main, 10);
setInterval(incTime, 1000);
makeBuy();
var cookiesSave = parseInt(localStorage.getItem("savedCookies"));
if(isNaN(cookiesSave)){
  cookiesSave = 0;
  localStorage.setItem("savedCookies", cookiesSave);
}
makeUpgrades();
var cookiesTemp = 0;
document.getElementById("hover").style.visibility="hidden";
function main(){
  unwrittenText = sentance.substring(writtenText.length, sentance.length);
  let displayUnwrittenText = unwrittenText.replace(/\s/g, "&#160;");
  displayWrittenText = showIncorrect(getIncorrect(), writtenText);
  displayWrittenText = displayWrittenText.replace(/\s/g, "&#160;");
  displayWrittenText = displayWrittenText.replaceAll("~", " ");
  document.getElementById("unwrittenText").innerHTML = displayUnwrittenText;
  document.getElementById("writtenText").innerHTML = displayWrittenText;
  increment();
  updateKeyVisibility();
  squish();
}
function incTime(){
  time++;
}

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}


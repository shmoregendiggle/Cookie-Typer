//var thonk = new Audio('sounds/thonk.mp3');
var thonk = new Audio('sounds/2.mp3').cloneNode(true);
// var thonk = new Audio('sounds/1.mp3');
KeyboardEvent.repeat = true;
var allowed = true;
var writtenText = "";
function keyDownSwitch(letter){
  if(0 == unwrittenText.length && letter != "BACKSPACE" || writtenText == "" && letter == "BACKSPACE"){return;}
    thonk.currentTime = 0;
    squishTime = 0.1;
    thonk.cloneNode(true).play();
    switch(letter){
      case ";":
        //document.getElementById("semi").src = "keyDownImages/" + ";" + "p.PNG";
        writtenText += ";";
        break;
      case " ":
        writtenText += " ";
        break;
      case "BACKSPACE":
        writtenText = writtenText.substring(0, writtenText.length-1);
        break;
      default:
        //document.getElementById(letter).src = "keyDownImages/" + letter + "p.PNG";
        writtenText += letter.toLowerCase();
        break;
    }
}
/*
function keyUpSwitch(letter){
    switch(letter){
      case ";":
        document.getElementById("semi").src = "keyUpImages/" + ";" + "u.PNG";
        break;
      case " ":
        break;
      case "BACKSPACE":
        break;
      default:
        document.getElementById(letter).src = "keyUpImages/" + letter + "u.PNG";
        break;
    }
}
*/
window.addEventListener('keydown', function (e) {
    if(keysInUse.includes(e.key.toLowerCase()) || e.key == "Backspace" || e.key == " "){
      keyDownSwitch(e.key.toUpperCase());
    }
  }, false);

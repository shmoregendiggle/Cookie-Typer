var keysToBeUsed = {
  "a":[110, 71],
  "s":[110, 106],
  "d":[110, 141],
  "f":[110, 176],
  "g":[110, 208],
  "h":[110, 243],
  "j":[110, 281],
  "k":[110, 312],
  "l":[110, 347],
  ";":[110, 386],
  ".":[141, 402],
  "(":[45, 323],
  ")":[45, 358],
  '"':[110, 421],
};
function updateKeyVisibility(){
  let keyWithLetters = '<img src="keyUpImages/keyboard.png" width="500" height=auto>';
  for(var key in keysToBeUsed){
    if(keysInUse.includes(key)){
      keyWithLetters += `<div style="top:`+keysToBeUsed[key][0]+`px;left:`+keysToBeUsed[key][1]+`px;color:black;position:absolute;">`+key.toUpperCase()+`</div>`;
    }
  }
    for(i=0;i<keysList.length;i++){
        switch(keysList[i]){
            case ";": 
                //document.getElementById("semi").className = "invisible".substring(keysInUse.includes(keysList[i])*2, 10);
            break;
            default:
                //document.getElementById(keysList[i].toUpperCase()).className = "invisible".substring(keysInUse.includes(keysList[i])*2, 10);
        }
    }
  document.getElementById("innerKeyboard").innerHTML = keyWithLetters;
}

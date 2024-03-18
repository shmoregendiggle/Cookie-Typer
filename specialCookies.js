function specialCookieChance(){
  if(localStorage.getItem("specialCookieIndex") == null){
    localStorage.setItem("specialCookieIndex", 1);
  }
  if(localStorage.getItem("specialCookieIndex") < sccn.length){
    chance = 1/sccn[localStorage.getItem("specialCookieIndex")];
  }else{
    chance = 1/sccn[sccn.length-1];
}
  localStorage.setItem("chance", chance);
  console.log(time);
  if(Math.random()>1-chance && localStorage.getItem("specialCookieIndex") != keysList.length){
    keysInUse += (keysList[parseInt(localStorage.getItem("specialCookieIndex"))]);
    localStorage.setItem("specialCookieIndex", parseInt(localStorage.getItem("specialCookieIndex")) + 1);
    localStorage.setItem("keysInUse", keysInUse);
    document.getElementById("superCookieModalBackground").style.display = "inline";
    let key = keysInUse[keysInUse.length-1];
    if(key == ";"){
        key = "semi";
    }
    document.getElementById("superCookieModal").innerHTML = "you have found the recipe to a " + eval("cookie"+key).name + " cookie! <br><img src='cookieImages/" + eval("cookie"+key).name + ".jpg' width='200' height='200'><br>these cookies are worth " + eval("cookie"+key).value + "$ and are baked by typing the letter " + keysInUse[keysInUse.length-1].toUpperCase()+"<br><button type='button' onclick='closeModal()'>close</button>";
    }
}
function closeModal(){
    document.getElementById("superCookieModalBackground").style.display = "none";
}

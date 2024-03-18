var unlockedBuy = 8;
function makeBuy(){
  let tableHTML = "";
  $ps = 0;
  for(i=0;i<unlockedBuy;i++){
    $ps += ((eval("buyItem"+i+".amount")) * (eval("buyItem"+i+".$ps")));
    if(eval("upgradeItem"+i+".bought == 'true'")){
    $ps += ((eval("buyItem"+i+".amount")) * (eval("buyItem"+i+".$ps")));
    }
    tableHTML += '<tr><td><button onclick="storeBuy('+i+')" class="buyButton"><img align="left" src="storeIcons/'+eval("buyItem"+i+".name")+
      '.png" alt="'+eval("buyItem"+i+".name")+'" width="80" height="50"><div align="left" class="buyName">'+eval("buyItem"+i+".name")+'</div><div class="buyPrice" align="left"> $'+eval("buyItem"+i+".price")+'</div><div class="buyAmount">'+eval("buyItem"+i+".amount")+'</div></button></td></tr>';
  }
  document.getElementById("buyTable").innerHTML = tableHTML;
}
function makeUpgrades(){  
  let totalUpgrades = 2+unlockedBuy;
  let upgradesHTML = "";
  for(i=0;i<totalUpgrades;i++){
    if(eval("upgradeItem"+i+".bought") == "true"){
      continue;
    }
    upgradesHTML+="<button type='button' class='makeUpgradesButton' onmouseover='upgradeHover("+i+")' onmouseout='upgradeHoverOff()' onclick='upgradeClick("+i+")'><img src='upgradeIcons/"+eval("upgradeItem"+i+".name")+".png' alt='"+eval("upgradeItem"+i+".name")+"' width='50px' height='50px'></button>";
  }
  document.getElementById("upgradesDiv").innerHTML = upgradesHTML;
}
function upgradeHover(i){
  document.getElementById("hover").style.visibility="visible";
  document.getElementById("hover").innerHTML = eval("upgradeItem"+i+".name")+"<p>"+eval("upgradeItem"+i+".description")+"</p>costs: $"+eval("upgradeItem"+i+".price");
}
function upgradeHoverOff(){
  document.getElementById("hover").style.visibility="hidden";
}
function upgradeClick(i){
  if(cookiesSave >= eval("upgradeItem"+i+".price")){
    cookiesSave -= eval("upgradeItem"+i+".price");
    localStorage.setItem("savedCookies", cookiesSave);
    eval("upgradeItem"+i+".bought = 'true'");
    localStorage.setItem("upgrade"+eval("upgradeItem"+i+".name"), "true");
    makeBuy();
    upgradeHoverOff();
    if(eval("upgradeItem"+i+".bought") && eval("upgradeItem"+i+".name") == "Punctuation"){
      keysInUse += (endingPunctuation.join("") + middlePunctuation.join("") + "(");
    }
  }
  makeUpgrades();
}

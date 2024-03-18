function increment(){
    cookiesTemp = valueCookies(writtenText)-valueCookies(getIncorrect());
    document.getElementById("moneyPerSec").innerHTML = "money: $" + Math.round(cookiesSave);
    document.getElementById("cookieSave").innerHTML = "$ per second: " + (Math.round(10*$ps))/10;  
    document.getElementById("cookieInBakery").innerHTML = "value of cookies in bakery: $" + cookiesTemp;
    document.getElementById("specialCookieChance").innerHTML = "new recipe chance: " + Math.round(1000*chance)/1000;
    if(sentance == writtenText){
        specialCookieChance();
        cookiesSave += cookiesTemp;
        cookiesTemp = 0;
        sentance = generateText(3,5,4,6, upgradeItem3.bought == "true", upgradeItem4.bought == "true");
        localStorage.setItem("savedCookies", cookiesSave);
        unwrittenText = sentance;
        writtenText = "";
    }
}

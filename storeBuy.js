function storeBuy(itemNum){
  if(cookiesSave >= eval("buyItem"+itemNum+".price")){
    eval("buyItem"+itemNum+".amount += 1;");
    localStorage.setItem(eval("buyItem"+itemNum+".name"),eval("buyItem"+itemNum+".amount"));
    makeBuy();
    cookiesSave -= eval("buyItem"+itemNum+".price");
    localStorage.setItem("savedCookies", cookiesSave);
  }
}

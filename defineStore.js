function buyItem(name, price, $ps){
  this.name = name;
  this.price = price;
  this.$ps = $ps;
  this.amount = parseInt(localStorage.getItem(name));
  if(isNaN(this.amount)){
    this.amount = 0;
  }
}
var buyItem0 = new buyItem("Typer", 10, 0.1);
var buyItem1 = new buyItem("Grandma", 100, 1);
var buyItem2 = new buyItem("Farm", 1000, 10);
var buyItem3 = new buyItem("Mine", 10000, 100);
var buyItem4 = new buyItem("Factory", 100000, 1000);
var buyItem5 = new buyItem("Bank", 1000000, 10000);
var buyItem6 = new buyItem("Temple", 10000000, 100000);
var buyItem7 = new buyItem("Wizard tower", 100000000, 1000000);
var buyItem8 = new buyItem("Shipment", 1000000000, 10000000);
var buyItem9 = new buyItem("Alchemy lab", 10000000000, 100000000);
function upgradeItem(name, price, bought, description, requirements){
  this.name = name;
  this.price = price;
  this.bought = localStorage.getItem("upgrade"+name);
  if(this.bought != "true"){
    this.bought = "false";
  }
  this.description = description; 
  this.requirements = requirements;
}
for(i=0;i<unlockedBuy;i++){
  eval("var upgradeItem"+(i+2)+" = new upgradeItem('"+eval("buyItem"+i+".name")+"', "+eval("buyItem"+i+".price * 10")+", false, 'This upgrade will double the the amount of money that "+eval("buyItem"+i+".name")+"s produce.', '"+eval("buyItem"+i+".amount")+" > 0');");
}
var upgradeItem0 = new upgradeItem("Words", 100000, false, "This upgrade will change the words you need to type from gibberish to words, while also doubling the value of cookies in bakery.", "keysInUse.includes('a')");
var upgradeItem1 = new upgradeItem("Punctuation", 1000000, false, "This upgrade will add all forms of puncuation to your keyboard.", "true");

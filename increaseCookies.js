setInterval(increaseCookies, 10);
function increaseCookies(){
  cookiesSave += ($ps / 100);
  localStorage.setItem("savedCookies", cookiesSave);
}

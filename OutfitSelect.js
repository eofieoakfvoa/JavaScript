if(isNaN(parseInt(localStorage.getItem("Gold")))){
    Gold = 0
}
else{
    Gold = parseInt(localStorage.getItem("Gold"))
    Upgrade1Array = JSON.parse(localStorage.getItem("Upgrade1"));
    gps = parseInt(localStorage.getItem("Gps"))
    GoldIncrease = parseInt(localStorage.getItem("GoldIncrease"))
}
var intervalId = window.setInterval(function(){
    Gold += gps
    update()
  }, 500);
function update(){
    GoldAmount.innerHTML = Gold
    localStorage.setItem("Gold", Gold)
    localStorage.setItem("Gps", gps)
    
}
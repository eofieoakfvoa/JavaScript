// Vars Declare
//ifall jag orkar https://stackoverflow.com/questions/68700561/using-local-storage-to-save-game-progress
let Button = document.querySelector(".Clicker")
let UpgradeButton = document.querySelector(".Upgrade1")
let UpgradeButton2 = document.querySelector(".Upgrade2")
let UpgradeButton3 = document.querySelector(".Upgrade3")
let UpgradeButton4 = document.querySelector(".Upgrade4")
let UpgradeButton5 = document.querySelector(".Upgrade5")
let UpgradeButton6 = document.querySelector(".Upgrade6")
let UpgradeButton7 = document.querySelector(".Upgrade7")
let UpgradeButton8 = document.querySelector(".Upgrade8")
let GoldAmount = document.querySelector(".GoldAmount")
let BuyButton = document.querySelector(".BuyItem")
let OutfitBuy = document.querySelector(".OutfitsTab")
let UpgradeBuy = document.querySelector(".UpgradesTab")
let imageButton = document.querySelector(".ClickImage")
let OutfitButton = document.querySelector(".Outfit1")
let OutfitButton2 = document.querySelector(".Outfit2")
let Gold = 5;
let GoldIncrease = 1
let Upgrade1Price = 10
let Upgrade2Price = 100
let inventory = ["hallå", "ja", "nej"]
let gps = 0
//Level, Cost, AddedGoldPerSecond, StartCost
let Upgrade1Array = [0, 10, 0, 10]
let Upgrade2Array = [0, 100, 1, 100]
let Upgrade3Array = [0, 500, 300, 500]
let Upgrade4Array = [0, 5000, 10, 5000]
let Upgrade5Array = [0, 50000, 50, 50000]
let Upgrade6Array = [0, 100000, 100, 100000]
let Upgrade7Array = [0, 2000000, 300, 2000000]
let Upgrade8Array = [0, 30000000, 9000, 30000000]
let OwnedOutfits = []
//save
if(isNaN(parseInt(localStorage.getItem("Gold")))){
    Gold = 0
}
else{
    Gold = parseInt(localStorage.getItem("Gold"))
    Upgrade1Array = JSON.parse(localStorage.getItem("Upgrade1"));
    gps = parseInt(localStorage.getItem("Gps"))
    GoldIncrease = parseInt(localStorage.getItem("GoldIncrease"))
    OwnedOutfits = JSON.parse(localStorage.getItem("OwnedOutfitsKey"))
}

function AddGold(){
    Gold += GoldIncrease 
    update()
}

console.log(OwnedOutfits)


// Outfit
let OutfistList = document.querySelectorAll(".OutfitImage")
const ToggleOutfits = () => {
    document.body.dataset.outfit = document.body.dataset.outfit === "true" ? "false" : "true";
}
OutfistList.forEach(Outfit => {
    Outfit.addEventListener("click", () => {
        console.log(parseInt(Outfit.dataset.Price))
        if (Gold >= parseInt(Outfit.dataset.Price) && OwnedOutfits.includes(Outfit.src) == false){
            console.log(OwnedOutfits)
            Gold -= parseInt(Outfit.dataset.Price)
            imageButton.src = Outfit.src
            OwnedOutfits.push(Outfit.src)
        }
        if (OwnedOutfits.includes(Outfit.src) == true){
            imageButton.src = Outfit.src
        
    }
        
})})



//Upgrades
imageButton.addEventListener("click", AddGold)
UpgradeButton.addEventListener("click", Upgrade1)
OutfitBuy.addEventListener("click", ChangeTab1)
UpgradeBuy.addEventListener("click", ChangeTab2)
MoneyOverTimeButtons = document.querySelectorAll(".MoneyOverTime")
MoneyOverTimeButtons.forEach(Button => {
    Button.addEventListener("click", () => {   
        
        
    })
})
function Upgrade1(){
    if (Gold >= Upgrade1Array[1]){
        GoldIncrease += 1
        Upgrade1Array[0] = parseInt(Upgrade1Array) + 1 
        console.log(Upgrade1Array[0])
        Gold -= Upgrade1Array[1]
        Upgrade1Array[1] = parseInt(Upgrade1Array[3] * Math.pow(1.4,Upgrade1Array[0]))
        update()
        "cant you see it bad dog but for you im obedient"
    }
}
function MoneyOverTime(){
    if (Gold >= Upgrade2Array[1]){
        gps += Upgrade2Array[3]
        Gold -= Upgrade2Array[1]
        Upgrade2Array[1] = parseInt(Upgrade2Array[3] * Math.pow(1.4,Upgrade2Array[0]))
        update()
    }
}

var intervalId = window.setInterval(function(){
    Gold += gps
    update()
  }, 500);
function ChangeTab1(){
    document.querySelector(".Upgrades").style.display = "none";
    document.querySelector(".Outfits").style.display = "Block";
}
function ChangeTab2(){
    document.querySelector(".Upgrades").style.display = "Block";
    document.querySelector(".Outfits").style.display = "None";
}

function update(){
    GoldAmount.innerHTML = Gold
    UpgradeButton.innerHTML = " " + Upgrade1Array[1]
    UpgradeButton2.innerHTML = " "  + Upgrade2Array[1]
    UpgradeButton3.innerHTML = " "  + Upgrade3Array[1]
    UpgradeButton4.innerHTML = " "  + Upgrade4Array[1]
    UpgradeButton5.innerHTML = " "  + Upgrade5Array[1]
    UpgradeButton6.innerHTML = " "  + Upgrade6Array[1]
    UpgradeButton7.innerHTML = " "  + Upgrade7Array[1]
    UpgradeButton8.innerHTML = " "  + Upgrade8Array[1]
    localStorage.setItem("Gold", Gold)
    localStorage.setItem("GoldIncrease", GoldIncrease)
    localStorage.setItem("Gps", gps)
    localStorage.setItem("Upgrade1", JSON.stringify(Upgrade1Array));
    localStorage.setItem("OwnedOutfitsKey", JSON.stringify(OwnedOutfits));
    
    
}
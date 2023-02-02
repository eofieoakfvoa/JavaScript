// Vars Declare
//ifall jag orkar https://stackoverflow.com/questions/68700561/using-local-storage-to-save-game-progress
let Gold = parseInt(localStorage.getItem("Gold")) || 0;

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
let Upgrade1Price = 10
let Upgrade2Price = 100
let inventory = ["hallå", "ja", "nej"]
//Level, Cost, AddedGoldPerSecond, StartCost
let Upgrade3Array = [0, 500, 300, 500]
let Upgrade4Array = [0, 5000, 10, 5000]
let Upgrade5Array = [0, 50000, 50, 50000]
let Upgrade6Array = [0, 100000, 100, 100000]
let Upgrade7Array = [0, 2000000, 300, 2000000]
let Upgrade8Array = [0, 30000000, 9000, 30000000]
//save
let Upgrade1Array = JSON.parse(localStorage.getItem("Upgrade1")) || [0, 10, 0, 10];
let Upgrade2Array = JSON.parse(localStorage.getItem("Upgrade2")) || [0, 100, 1, 100]
let gps = parseInt(localStorage.getItem("Gps")) || 0
let GoldIncrease = parseInt(localStorage.getItem("GoldIncrease")) || 1
let OwnedOutfits = JSON.parse(localStorage.getItem("OwnedOutfitsKey")) || []


function AddGold(){
    Gold += GoldIncrease 
    update()
}


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


/*
coolButton.addEventListener("click", () => {
    buyItem("candle", 10, 3);
})

buyItem("candle", 10, 1);
buyItem("shovel", 20, 2);

function buyItem(item, cost, powerAmount) {
    if (gold > cost) {
        inventory.push(item);
    }

}
*/



//Upgrades
imageButton.addEventListener("click", AddGold)
UpgradeButton.addEventListener("click", Upgrade1)
MoneyOverTimeButtons = document.querySelectorAll(".MoneyOverTime")
MoneyOverTimeButtons.forEach(Button => {
    Button.addEventListener("click", () => {   
        console.log(Button.dataset.Array)
        MoneyOverTime(Button.dataset.Array)
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
        
    }
}
function MoneyOverTime(UpgradeArray){
    if (Gold >= UpgradeArray[1]){
        console.log(UpgradeArray)
        UpgradeArray[0] =+ 1
        gps += UpgradeArray[2]
        Gold -= UpgradeArray[1]
        UpgradeArray[1] = parseInt(UpgradeArray[3] * Math.pow(1.4,UpgradeArray[0]))
        update()
    }
}

var intervalId = window.setInterval(function(){
    if (gps > 0){
        Gold += gps
    }
    update()
  }, 500);
function update(){
    localStorage.setItem("Gold", Gold || 0)
    localStorage.setItem("GoldIncrease", GoldIncrease)
    localStorage.setItem("Gps", gps)
    localStorage.setItem("Upgrade1", JSON.stringify(Upgrade1Array));
    localStorage.setItem("Upgrade2", JSON.stringify(Upgrade2Array));
    localStorage.setItem("OwnedOutfitsKey", JSON.stringify(OwnedOutfits));
    GoldAmount.innerHTML = Gold
    UpgradeButton.innerHTML = " " + Upgrade1Array[1]
    UpgradeButton2.innerHTML = " "  + Upgrade2Array[1]
    UpgradeButton3.innerHTML = " "  + Upgrade3Array[1]
    UpgradeButton4.innerHTML = " "  + Upgrade4Array[1]
    UpgradeButton5.innerHTML = " "  + Upgrade5Array[1]
    UpgradeButton6.innerHTML = " "  + Upgrade6Array[1]
    UpgradeButton7.innerHTML = " "  + Upgrade7Array[1]
    UpgradeButton8.innerHTML = " "  + Upgrade8Array[1]
    
    
}   
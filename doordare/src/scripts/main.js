// Popup Open
function popupOpen(){
  document.getElementById("popup").style.display="block";
  document.getElementById("overlay").style.display="block";
}
// Popup Close
function popupClose(){
  document.getElementById("popup").style.display="none";
  document.getElementById("overlay").style.display="none";
}

//create Account
const createAccountBtn = document.getElementById('createAccountBtn');

//forfeit Quantity Gif
function getForfeitQuantity() { 
  const random = Math.random();
  let quantity = 0;
  if (random <= 0.6) {
    quantity = 1;
  } else if (random > 0.6 && random <= 0.9) {
    quantity = 2;
  } else {
    quantity = 3;
  }

  document.getElementById("forfeitcounter").src = "./assets/images/animations/" + quantity + "x.gif";
}

function resetForfeitText() {
  document.getElementById('forfeit-text').innerHTML = "-";
}

//Create Account pop up
const createAccountFormbtn = document.querySelector('.createAccountFormbtn');
createAccountFormbtn.addEventListener('click', function() {
    document.getElementById("login-form").style.display="none";
    document.getElementById("Signup-form").style.display="block";
});

//Rulebook pop up
const rulebookBtn = document.querySelector('.rulebook');
rulebookBtn.addEventListener('click', function() {
    document.getElementById("card-form").style.display="none";
    document.getElementById("rulebook-form").style.display="block";
});

const backtogamerulebtn = document.querySelector('.backtogamerulebtn');
backtogamerulebtn.addEventListener('click', function() {
  document.getElementById("card-form").style.display="block";
    document.getElementById("rulebook-form").style.display="none";
});



//GameType enabled/disabled
const GametypeRadioBtnDefault = document.querySelector('input[id="GametypeRadio-1"]');
const GametypeRadioBtnCustom = document.querySelector('input[id="GametypeRadio-2"]');
const GametypeRadioBtnOverload = document.querySelector('input[id="GametypeRadio-3"]');

GametypeRadioBtnDefault.addEventListener('change', function() {
  document.getElementById("drinkselection").style.display="none";
  document.getElementById("drinkquantity").style.display="none";
});

GametypeRadioBtnCustom.addEventListener('change', function() {
  document.getElementById("drinkselection").style.display="block";
  document.getElementById("drinkquantity").style.display="block";
});

GametypeRadioBtnOverload.addEventListener('change', function() {
  document.getElementById("drinkselection").style.display="none";
  document.getElementById("drinkquantity").style.display="none";
});



createAccountBtn.addEventListener('click', function(e) {
  createAccount();
});

const startGameBtn = document.querySelector(".startgamebtn");
startGameBtn.addEventListener('click', function() {

  let playerName = document.getElementById("playerNames");


  let inputValue = playerName.value;
  let inputArray = inputValue.split(",");
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].trim();
  }

  window.sessionStorage.setItem("Players", JSON.stringify(inputArray));
  var storedArray = JSON.parse(sessionStorage.getItem("Players"));
  
  document.getElementById("card-settings").style.display="none";
  document.getElementById("card-form").style.display="block";

  document.getElementById("playerNameText").innerHTML = storedArray[0];
});


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
  console.log(quantity);
}

function resetForfeitText() {
  document.getElementById('forfeit-text').innerHTML = "-";
}



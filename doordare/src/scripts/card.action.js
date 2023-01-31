const actionCard = document.querySelector(".action_card__inner");
const actionFlipbtn = document.querySelector(".flipcardbtn")
const endturnbtn = document.querySelector(".endturnbtn");
const forfeitendturnbtn = document.querySelector(".forfeitendturnbtn");
const forfeitbtn = document.querySelector(".forfeitcardbtn");

actionFlipbtn.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
    endturnbtn.removeAttribute('disabled');
    actionFlipbtn.setAttribute("disabled", "disabled");
    getRandomTask();
});

endturnbtn.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
    endturnbtn.setAttribute("disabled", "disabled");
    actionFlipbtn.removeAttribute('disabled');

    let playerName = document.querySelector(".playerNameText");
    var storedArray = JSON.parse(sessionStorage.getItem("Players"));

    setTimeout(() => {for (let i = 0; i < storedArray.length; i++) {
      if (playerName.textContent === storedArray[i]) {
        playerName.textContent = storedArray[i + 1] ? storedArray[i + 1] : storedArray[0];
        if (playerName.textContent === storedArray[0]) {
          increaseRoundNumber();
        }
        break;
      }
    }}, 1000);

});

forfeitendturnbtn.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
    endturnbtn.setAttribute("disabled", "disabled");
    actionFlipbtn.removeAttribute('disabled');
    popupClose();
    resetForfeitText();
});

forfeitbtn.addEventListener("click", function (e){
    getForfeitQuantity();
    setTimeout(getRandomForfeit, 100);
    var forfeitText = document.getElementById("forfeit-text");
  
  // add fade-in effect
    forfeitText.style.opacity = 0;
    var fadeInInterval = setInterval(function() {
    if (forfeitText.style.opacity < 1) {
      forfeitText.style.opacity = parseFloat(forfeitText.style.opacity) + 0.1;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 150);
    
});

function increaseRoundNumber() {
  let roundText = document.getElementById("roundText").innerHTML;
  console.log(roundText);
  let roundArr = roundText.split(" ");
  console.log(roundArr[0] + "-" + roundArr[1]);
  let roundNo = roundArr[1];
  roundNo++;

  console.log(roundNo);
  document.getElementById("roundText").innerHTML = roundArr[0] + " " + roundNo;
}

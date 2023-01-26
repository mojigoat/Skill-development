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

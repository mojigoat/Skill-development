
const actionCard = document.querySelector(".action_card__inner");
const actionFlipbtn = document.querySelector(".flipcardbtn")
const endturnbtn = document.querySelector(".endturnbtn");
const forfeitendturnbtn = document.querySelector(".forfeitendturnbtn");

actionFlipbtn.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
    endturnbtn.removeAttribute('disabled');
    actionFlipbtn.setAttribute("disabled", "disabled");
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
});

// const { GetRandomAction } = require('/mdb/mongodb.calls');
import { GetRandomAction } from '/mdb/mongodb.calls';

const actionCard = document.querySelector(".action_card__inner");
const actionFlipbtn = document.querySelector(".flipcardbtn")
const forfeitCard = document.querySelector(".forfeitcardbtn");
const endturnbtn = document.querySelector(".endturnbtn");
const forfeitendturnbtn = document.querySelector(".forfeitendturnbtn");

actionFlipbtn.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
    endturnbtn.removeAttribute('disabled');
    actionFlipbtn.setAttribute("disabled", "disabled");
    GetRandomAction();
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

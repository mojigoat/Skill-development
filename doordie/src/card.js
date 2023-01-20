const actionCard = document.querySelector(".action_card__inner");
const actionFlipbtn = document.querySelector(".flipcardbtn")
const forfeitCard = document.querySelector(".forfeitcardbtn");


actionFlipbtn.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
});

forfeitCard.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
});


// forfeitCard.addEventListener("click", function (e) {
//     forfeitCard.classList.toggle('is-flipped');
// });
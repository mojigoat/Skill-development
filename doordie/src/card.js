const actionCard = document.querySelector(".action_card__inner");
// const forfeitCard = document.querySelector(".forfeit_card__inner");

actionCard.addEventListener("click", function (e) {
    actionCard.classList.toggle('is-flipped');
});



// forfeitCard.addEventListener("click", function (e) {
//     forfeitCard.classList.toggle('is-flipped');
// });
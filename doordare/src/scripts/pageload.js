if(sessionStorage.getItem('LoginSessionName')){
    document.getElementById("login-form").style.display="none";
    document.getElementById("card-settings").style.display="block";

    if(sessionStorage.getItem('Players')){
        document.getElementById("card-settings").style.display="none";
        document.getElementById("card-form").style.display="block";

        var storedArray = JSON.parse(sessionStorage.getItem("Players"));
        let playerName = document.querySelector(".playerNameText");
        playerName.textContent = storedArray[0];
    }
}


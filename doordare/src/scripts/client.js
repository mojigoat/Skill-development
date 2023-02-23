console.log('Client-side code running');

const signupuserInput = document.getElementById('signup-username');
const signuppassInput = document.getElementById('signup-pass');
const signupemailInput = document.getElementById('signup-email');
const signupageInput = document.getElementById('signup-ageDate');

function getRandomTask() {
  fetch('/task/random', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      document.getElementById('actionTask').innerHTML = data.action_task;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getRandomForfeit() {
  fetch('/forfeit/random', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      document.getElementById('forfeit-text').innerHTML = data.forfeit_drink;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function createAccount(){
  const username = signupuserInput.value;
  const pswd = signuppassInput.value;
  const email = signupemailInput.value;
  const ageDate = signupageInput.value;

  fetch('/createAccount', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      pswd,
      email,
      ageDate
    })
    }).then(function(response) {
      if(response.ok) {
        window.sessionStorage.setItem("LoginSessionName", JSON.stringify(username));
        document.getElementById("Signup-form").style.display="none";
        document.getElementById("card-settings").style.display="block";
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
}


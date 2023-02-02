const loginBtn = document.getElementById('loginbtn');
const usernameInput = document.getElementById('login-username');
const passwordInput = document.getElementById('login-pass');

loginBtn.addEventListener('click', async () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  
  // Send a POST request to the server with the user's login credentials
  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  console.log(response);
  if (response.ok) {
    const json = await response.json();
    console.log(json.message);
    
    window.sessionStorage.setItem("LoginSessionName", JSON.stringify(username));
    document.getElementById("login-form").style.display="none";
    document.getElementById("card-settings").style.display="block";

  } else {
    console.log('Incorrect login');
  }
});

const ageCheckBox = document.getElementById('ageVerify');


ageCheckBox.addEventListener('change', async () => {
  const createAccountBtn = document.getElementById('createAccountBtn');
  const ageDate = document.getElementById('signup-ageDate');

  if(ageCheckBox.checked == true && ageDate.value != ""){
    createAccountBtn.disabled = false;
  }else{
    createAccountBtn.disabled = true;
  }

});





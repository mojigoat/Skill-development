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

    document.getElementById("login-form").style.display="none";
    document.getElementById("card-form").style.display="block";

  } else {
    console.log('Incorrect login');
    // Handle unsuccessful login
  }
});
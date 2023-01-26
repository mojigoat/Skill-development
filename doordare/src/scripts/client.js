console.log('Client-side code running');

function getRandomTask() {
  console.log('Getting Task...');
  fetch('/task/random', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('actionTask').innerHTML = data.action_task;
    })
    .catch(function(error) {
      console.log(error);
    });
}

function getRandomForfeit() {
  console.log('Getting Forfeit...');
  fetch('/forfeit/random', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      console.log(data);
      document.getElementById('forfeit-text').innerHTML = data.forfeit_drink;
    })
    .catch(function(error) {
      console.log(error);
    });
}
// const button = document.getElementById('myButton');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');

//   fetch('/clicked', {method: 'POST'})
//     .then(function(response) {
//       if(response.ok) {
//         console.log('Click was recorded');
//         return;
//       }
//       throw new Error('Request failed.');
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// });

// setInterval(function() {
//     fetch('/clicks', {method: 'GET'})
//       .then(function(response) {
//         if(response.ok) return response.json();
//         throw new Error('Request failed.');
//       })
//       .then(function(data) {
//         document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//   }, 1000);


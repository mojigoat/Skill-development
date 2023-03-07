const callAStranger = document.getElementById('CallaStrangerBtn')
const callAMod = document.getElementById('CallaModBtn')
const callDadM = document.getElementById('CallDadMBtn')
const chatPoll = document.getElementById('TwitchChatBtn')
const askSiri = document.getElementById('AskSiriBtn')

callAStranger.addEventListener('click', () => {
    const popUpDiv = document.createElement('div'); // create a new div element
    popUpDiv.innerText = 'Hello! This is a pop-up message.'; // add text to the div
    popUpDiv.style.position = 'absolute'; // set position to absolute
    popUpDiv.style.top = '50%'; // set top position to 50%
    popUpDiv.style.left = '50%'; // set left position to 50%
    popUpDiv.style.transform = 'translate(-50%, -50%)'; // center the div horizontally and vertically
    popUpDiv.style.backgroundColor = '#fff'; // set background color to white
    popUpDiv.style.padding = '20px'; // add some padding
    popUpDiv.style.border = '1px solid #ccc'; // add a border
    popUpDiv.style.zIndex = '9999'; // set z-index to ensure it appears above other elements
  
    // create a button to close the pop-up div
    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.padding = '10px';
    closeButton.style.border = 'none';
    closeButton.style.backgroundColor = '#ccc';
    closeButton.style.cursor = 'pointer';
    popUpDiv.appendChild(closeButton); // add the button to the div
  
    // attach an event listener to the close button
    closeButton.addEventListener('click', () => {
      document.body.removeChild(popUpDiv); // remove the div from the DOM
    });
  
    document.body.appendChild(popUpDiv); // add the div to the document body
    callAStranger.ariaDisabled = true;
  });

callAMod.addEventListener('click', () => {
  
})

callDadM.addEventListener('click', () => {
  
})

chatPoll.addEventListener('click', () => {
  
})

askSiri.addEventListener('click', () => {
  
})
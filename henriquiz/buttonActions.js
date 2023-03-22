const callAStranger = document.getElementById('CallaStrangerBtn')
const callATwitchSubscriber = document.getElementById('callATwitchSubscriber')
const callAMod = document.getElementById('CallaModBtn')
const callDadM = document.getElementById('CallDadMBtn')
const chatPoll = document.getElementById('TwitchChatBtn')
const askSiri = document.getElementById('AskSiriBtn')

var callAStrangerCounter = 2;

var stangers = ["083 382 8035", "067 977 7884"]
strangerNum = 0;

callAStranger.addEventListener('click', () => {

  if(callAStrangerCounter > 0){
    window.alert("Call this randomly generated stranger - " + stangers[strangerNum]);
    strangerNum++;
    callAStrangerCounter--;

    callAStranger.innerHTML = callAStrangerCounter + " x Call a stranger";

    if(callAStrangerCounter == 0){
      callAStranger.disabled = true;
    }
  }else{
    callAStranger.disabled = true;
  }
});

callATwitchSubscriber.addEventListener('click', () => {
  
  callATwitchSubscriber.disabled = true;
  window.alert("Choose a non-modded Twitch Subscriber to call.");
});

callAMod.addEventListener('click', () => {
  callAMod.disabled = true;
  window.alert("Choose a Twitch Mod to call.");
})

callDadM.addEventListener('click', () => {
  callDadM.disabled = true;
  window.alert("Call DadM.");
})

chatPoll.addEventListener('click', () => {
  chatPoll.disabled = true;
  window.alert("Create a Twitch Poll.");
})

askSiri.addEventListener('click', () => {
  askSiri.disabled = true;
  window.alert("Ask Siri.");
})
let name = prompt("what's your name?");
let msg = document.getElementById('h');
msg.innerText = `Wagwan ${name  ?? "there"}😊!`
const responses = {
  'hello': 'Hi, how are you?',
  'hi': 'Hey, what\'s up?',
  'how are you': 'I\'m good, thanks!',
  'describe your creator': 'Tony is the coolest being ever',
  'who\'s the boss?':'boss mide',
  'sharp':'Ajeh!!!!!!!!!',
  'i\'m okay and you?' : 'I try my best😊,'
};

function chatBot() {
  const userInput = document.getElementById('inp').value.toLowerCase();
  const response = document.getElementById('response');

  response.innerHTML = responses[userInput] || 'Nice to meet you!';
}
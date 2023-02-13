const typing = document.querySelector('[data-js="typing"]');

const message = [`Olá, seja bem vinda a sua transformação!`];

let i = 0;
let caracterIndex = 0;
let currentMessage = message[i];
let currentCaracter = currentMessage[caracterIndex];

const type = () => {
 for (let i = 0; i <= message.length; i++) {
  if (caracterIndex < currentMessage.length) {
   typing.textContent += currentCaracter;
   caracterIndex++;
   currentCaracter = currentMessage[caracterIndex];
  } 
 }
};

setInterval(type, 200);



import './css/app.css'
import './css/cards.css'
import './css/header.css'
import moment from 'moment'

console.log(moment().startOf('hour').fromNow());

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

/**
* createNewCard vytvorí nový card element
* do Stringu budem posielať Názov uzlu a popis uzlu
*
* @param {String} name
* @param {String} description
*/
function createKnotCard(name, description) {
  const newCard = document.createElement('li');

  newCard.innerHTML = `
    <h3>${name}</h3>
    <p>${description}</p>
  `;

  cardContainer.appendChild(newCard);
}

const cardContainer = document.querySelector('.cards ul');
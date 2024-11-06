import './css/app.css'
import './css/cards.css'
import './css/header.css'
import './css/footer.css'
import moment from 'moment'

console.log(moment().startOf('hour').fromNow());

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
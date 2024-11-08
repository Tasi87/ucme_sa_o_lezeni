// import 'animate.css';

/**
* createNewCard vytvorí nový card element
* do Stringu budem posielať Názov uzlu a popis uzlu
*
* @param {String} category
* @param {String} name
* @param {String} description
* @param {String} image
*/
function createKnotCard(category, name, description, /*image*/) {
    const newCard = document.createElement('li');
  
    newCard.innerHTML = `
	  <h2>${category}</h2>
      <h3>${name}</h3>
      <p>${description}</p>
	  `;
//	  <a href"#">${image}</a> toto treba prehodiť do newCard
  
    cardContainer.appendChild(newCard);
  }
  
  const cardContainer = document.querySelector('.cards ul');
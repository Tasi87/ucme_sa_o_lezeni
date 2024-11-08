const ul = document.querySelector('ul');
	console.log(ul);

cardContainer.addEventListener('click', (event) => {
	const clickedItem = event.target.closest('li');

	if (clickedItem) {
		const h2 = clickedItem.querySelector('h2');
		const h3 = clickedItem.querySelector('h3');
		const p = clickedItem.querySelector('p');
		const img = clickedItem.querySelector('img');

		const isImageVisible = img && img.style.display === 'block';
		
		if (isImageVisible) {
			img.style.display = 'none';
			if (h2) h2.style.display = 'block';
			if (h3) h3.style.display = 'block';
			if (p) p.style.display = 'block';
		} else {
			if (img) img.style.display = 'block'
			if (h2) h2.style.display = 'none';
			if (h3) h3.style.display = 'none';
			if (p) p.style.display = 'none';
		}

		clickedItem.classList.add('animate__animated', 'animate__flipInY', 'animate__faster');

		clickedItem.addEventListener('animationend', () => {
			clickedItem.classList.remove('animate__animated', 'animate__flipInY', 'animate__faster');
		}, { once: true});
	}
});

const ul = document.querySelector('ul');
	console.log(ul);

cardContainer.addEventListener('click', (event) => {
	const clickedItem = event.target.closest('li');
	if (clickedItem) {
		const img = clickedItem.querySelector('img');
		if (img) {
			img.style.display = img.style.display === 'none' ? 'block' : 'none';
		}
	}
});

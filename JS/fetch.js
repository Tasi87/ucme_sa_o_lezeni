fetch('/js/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(knot => {
            createKnotCard(knot.category, knot.name, knot.description, knot.image);
        });
    });
fetch('/js/data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(knot => {
            createKnotCard(knot.name, knot.description)
        });
    });
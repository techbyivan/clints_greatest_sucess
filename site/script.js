fetch("http://localhost:3445/animals")
	.then((resp) => resp.json())
	.then((data) => {
        document.getElementById("animals").innerHTML =
            data.map((animal) => `<li>${animal.name} : ${animal.age}</li>}`)
			.join("");
		console.log(data);

		let list = document.querySelectorAll("li");
		list.forEach((listItem) =>
			listItem.addEventListener("click", (evt) => {
				console.log(evt.target.id);
				let chosen = document.getElementById("chosen");
				let animal = data.find((a) => a.id == evt.target.id.replace("id_"));

                chosen.innerHTML = `
                <h2>${animal.name}</h2>
                <div>Ave: ${animal.age}</div>
                <div>Color: ${animal.age}</div>
                <div>Type: ${animal.age}</div>`;
			})
		);
	});

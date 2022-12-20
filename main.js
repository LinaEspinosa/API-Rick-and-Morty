console.log("si hola");

const cards = document.getElementById('cards')
const template = document.querySelector('#template-card').content;
const fragment = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () => {
  fetchApi()
})

const fetchApi = async () => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await res.json();

    pintarCards(data)
  } catch (error) {
    console.log(error)
  }
}

const pintarCards = data => {
  Object.values(data.results).forEach((personaje) => {
    console.log(personaje)
    template.querySelector(".img-card").setAttribute("src", personaje.image)
    template.querySelector(".nombre").textContent = personaje.name;
    template.querySelector(".estado").textContent = `Estado: ${personaje.status}`;
    template.querySelector(".especie").textContent = `Especie: ${personaje.species}`;
    template.querySelector(".tipo").textContent = `Tipo: ${personaje.type}`;
    template.querySelector(".genero").textContent = `Genero: ${personaje.gender}`;

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })

  cards.appendChild(fragment)
  console.log(cards);
}

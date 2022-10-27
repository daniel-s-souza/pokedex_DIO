const offset = 0;
const limit = 10;

const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonHtml (pokemon) {
  return `
  <li class="Pokemon">
  <span class="PokeNumber"> #001 </span>
  <span class="Name">${pokemon.name}</span>
  <div class="detail">
    <ol class="Types">
      <li class="type">Grass</li>
      <li class="type">Poison</li>
    </ol>
    <img class="pokemonImg" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=${pokemon.name}>
  </div>
</li>
  `
}

fetch(URL)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {

    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      console.log(convertPokemonHtml(pokemon));
    }

  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));


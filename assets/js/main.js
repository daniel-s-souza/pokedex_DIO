

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

const pokemonOl = document.getElementById('pokemonList')

 pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML += pokemonList.map( convertPokemonHtml).join('');
  })


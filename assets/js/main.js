
function convertPokemonHtml (pokemon) {
  return `
  <li class="Pokemon ${pokemon.type}">
  <span class="PokeNumber"> #00${pokemon.number} </span>
  <span class="Name">${pokemon.name}</span>
  <div class="detail">
    <ol class="Types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
    <img class="pokemonImg" src="${pokemon.image}" alt=${pokemon.name}>
  </div>
</li>
  `
}

const pokemonOl = document.getElementById('pokemonList')

 pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML = pokemonList.map( convertPokemonHtml).join('');
  })


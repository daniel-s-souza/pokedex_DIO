function convertPokemonType (pokemonType) {
  return pokemonType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonHtml (pokemon) {
  return `
  <li class="Pokemon">
  <span class="PokeNumber"> #00${pokemon.order} </span>
  <span class="Name">${pokemon.name}</span>
  <div class="detail">
    <ol class="Types">
        ${convertPokemonType(pokemon.types).join(' ')}
    </ol>
    <img class="pokemonImg" src="${pokemon.sprites.other.dream_world.front_default}" alt=${pokemon.name}>
  </div>
</li>
  `
}

const pokemonOl = document.getElementById('pokemonList')

 pokeApi.getPokemons().then((pokemonList = []) => {
  pokemonOl.innerHTML = pokemonList.map( convertPokemonHtml).join('');
  })


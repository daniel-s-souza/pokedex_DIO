const pokeApi = {} 

function convertPokeApiDetailtoPokemon (pokeDetail) {
  const pokemon = new Pokemon()
  pokemon.name = pokeDetail.name
  pokemon.number = pokeDetail.id
  const types =  pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [ type ] = types;
  pokemon.types = types;
  pokemon.type = type;
  pokemon.image = pokeDetail.sprites.other.dream_world.front_default

  return pokemon;
}

pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
  .then(convertPokeApiDetailtoPokemon)
  
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

return fetch(URL)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
  .then((detailRequest) => Promise.all(detailRequest))
  .then((pokemonDetails) =>pokemonDetails)
}
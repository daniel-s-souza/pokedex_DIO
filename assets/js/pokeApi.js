const pokeApi = {} 

pokeApi.getPokemons = (offset = 0, limit = 10) => {
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

return fetch(URL)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .catch((error) => error); 
}
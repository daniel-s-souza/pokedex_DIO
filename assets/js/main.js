const pokemonOl = document.getElementById('pokemonList')
const button = document.getElementById('loadMorePokemons')
const limit = 6
let offset = 0
const maxRegister = 151

function loadPokemons (offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
    const newHtml = pokemonList.map((pokemon) => {
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
      </li>`}
    ).join('');
    pokemonOl.innerHTML += newHtml;
    }) 
} 

 loadPokemons(offset, limit)

button.addEventListener('click', () => {
  offset += limit;

  const qtRegister = offset + limit;
  
  if (qtRegister >= maxRegister) {
    const newLimit = maxRegister - offset;
    loadPokemons(offset, newLimit);
    button.parentElement.removeChild(button);
  } else {
    loadPokemons(offset, limit);
  }
})
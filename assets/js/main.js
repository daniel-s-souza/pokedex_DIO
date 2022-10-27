const offset = 0;
const limit = 10;

const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(URL).then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("Done");
});
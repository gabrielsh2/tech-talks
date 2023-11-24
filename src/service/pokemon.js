import axios from 'axios'

export function pokemonService() {
  function getPokemonList() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/')
  }

  return {
    getPokemonList
  }
}

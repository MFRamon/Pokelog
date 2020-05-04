/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BASE_RUL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = (offsetNum) => {
  axios
    .get(`${BASE_RUL}?offset=${offsetNum}&limit=20`)
    .then((response) => {
      console.log(response.data.results);
    })
    .catch((error) => error.message);
};

export const getPokemon = (pokemonIndex) => {
  axios
    .get(`${BASE_RUL}${pokemonIndex}`)
    .then((response) => response.data.abilities)
    .catch((error) => error.message);
};

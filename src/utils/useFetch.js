/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

const BASE_RUL = 'https://pokeapi.co/api/v2/pokemon/';

export const useFetchPokemons = (offset) => {
  const [pokemons, setPokemons] = useState({ pokemons: [], loading: true });

  useEffect(() => {
    fetch(`${BASE_RUL}?offset=${offset}&limit=20`)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setPokemons({ pokemons: response.results, loading: false }, () => {});
        }
      })
      .catch(console.log);
  }, [offset]);

  return pokemons;
};

export const useFetchPokemon = (pokemonUrl) => {
  const [data, setData] = useState({ data: [], isLoading: true });

  useEffect(() => {
    fetch(`${pokemonUrl}`)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setData(
            { data: response, isLoading: false },
            () => {},
          );
        }
      })
      .catch(console.log);
  }, [pokemonUrl]);

  return data;
};

import { useEffect, useState } from 'react';
// eslint-disable-next-line import/prefer-default-export
export const useFetch = (url) => {
  const [pokemons, setPokemons] = useState({ pokemons: [], loading: true });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          setPokemons({ pokemons: response.results, loading: false }, () => {});
        }
      })
      .catch(console.log);
  }, [url]);

  return pokemons;
};

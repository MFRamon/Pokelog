import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Card from '../Card';

const Wrapper = styled.div`
  display: inline-block;
`;

const CardList = ({ cards, query }) => {
  const [pokemonSelected, setPokemonSelected] = useState();

  const handleSelectedPokemon = (pokemon) => {
    setPokemonSelected(pokemon);
  };

  const pokemons = cards
    .filter((pokemon) => (pokemon.name.toLowerCase().indexOf(query.toLowerCase()) >= 0))
    .map((pokemon) => (
      <Card
        onClick={() => handleSelectedPokemon(pokemon)}
        selected={pokemonSelected}
        name={pokemon.name}
        url={pokemon.url}
      />
    ));


  return (
    <Wrapper>
      { pokemons }
    </Wrapper>
  );
};

CardList.defaultProps = {
  query: '',
  cards: [],
};

CardList.propTypes = {
  cards: propTypes,
  query: propTypes.string,
};


export default CardList;

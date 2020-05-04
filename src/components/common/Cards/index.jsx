import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Card from '../Card';

const Wrapper = styled.div`
  display: inline-block;
`;

const Cards = ({ cards, query, selected }) => {
  const pokemons = cards
    .filter((pokemon) => (pokemon.name.toLowerCase().indexOf(query.toLowerCase()) >= 0))
    .map((pokemon) => (
      <Card
        onClick={() => selected(pokemon)}
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

Cards.defaultProps = {
  query: null,
  cards: [],
  selected: undefined,
};

Cards.propTypes = {
  cards: propTypes.node,
  query: propTypes.string,
  selected: propTypes.func,
};


export default Cards;

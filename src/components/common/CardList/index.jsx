import React from 'react';
import Card from '../Card';

const CardList = ({ cards }) => (
  cards.map((card) => (
    <Card name={card.name} url={card.url} />
  ))

);

export default CardList;

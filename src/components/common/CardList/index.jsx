import React from 'react';
import Card from '../Card';

const CardList = ({ cards }) => (
  cards.map((card) => (
    <Card name={card.name} weight={card.weight}>
      {card.children}
    </Card>
  ))

);

export default CardList;

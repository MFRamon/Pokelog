import React from 'react';
import styled from 'styled-components';
import Card from '../Card';


const Container = styled.div`

`;


const CardList = (cards) => (
  <Container>
    {cards.map((card) => (
      <Card name={card.name} weight={card.weight} image={card.image}>
        {card.children}
      </Card>
    ))}
  </Container>

);

export default CardList;

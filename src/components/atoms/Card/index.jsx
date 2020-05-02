import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 18%;
  display: block;
  background-color: ${({ theme }) => theme.cardElevated};
  border-radius: 25px;
  margin: 1.0rem 1.0rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.main};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 25px;
    transform: translate(0px, -2px);
    }

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.main};
      box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 25px;
      transform: translate(0px, -2px);
    }
  }
`;

const Content = styled.div`
  height: 190px;
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        align-self: unset;
        max-height: 60px;
        overflow: hidden;
    }
`;

const BottomContent = styled.div`
    width: 100%;
    height: 40%;
    display: flex;

`;

const Card = () => (
  <Wrapper>
    <Content>
      <TopContent>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" alt="App Name" />
      </TopContent>
      <BottomContent />
    </Content>
  </Wrapper>
);


Card.propTypes = {
  // onClick: propTypes.func.isRequired,
  // children: propTypes.node.isRequired,
};


export default Card;

import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.cardElevated};
  border-radius: 0.5rem;
  margin: 0.4rem 0.4rem;

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
    background-color: red;
    border-radius: 0.5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    font-size: 0.9375rem;
    align-items: center;
    justify-content: space-evenly;
`;

const Card = ({ children }) => (
  <Wrapper>
    <Content>
      <TopContent>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" alt="App Name" />
      </TopContent>
      <BottomContent>
        {children}
      </BottomContent>
    </Content>
  </Wrapper>
);

Card.defaultProps = {
  children: 'Default Text',
};

Card.propTypes = {
  children: propTypes.node,
};


export default Card;

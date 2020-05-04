/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Paragragh from '../Paragraph';
import Title from '../Title';


const Wrapper = styled.aside`
  position: relative;
  display: block;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 60rem;
    overflow: hidden;
  }

  @media (min-width: 1024px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 35vw;
    background-color: ${({ theme }) => theme.rightLayout};
    box-shadow: rgba(0, 0, 0, 0.20) 0px 4px 25px;
    border-width: 0.063rem;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.05);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem;
  height: 100%;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  height: 20%;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  height: 80%;
`;


const Sprite = styled.img`
  width: 6em;
  height: 6em;
`;

const Aside = ({ pokemonDetail }) => (
  <Wrapper>
    <Content>
      {pokemonDetail !== null ? (
        <>
          <TopContent>
            <Sprite src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
          </TopContent>
          <BottomContent>
            <Paragragh>{pokemonDetail.name}</Paragragh>
            <Paragragh>{pokemonDetail.url}</Paragragh>
            <Paragragh>This is a pokemon</Paragragh>
            <Paragragh>This is a pokemon</Paragragh>
            <Paragragh>This is a pokemon</Paragragh>
          </BottomContent>
        </>
      )
        : <Title>No Pokemon Selected</Title>}
    </Content>
  </Wrapper>
);


Aside.defaultProps = {
  pokemonDetail: null,
};

Aside.propTypes = {
  pokemonDetail: propTypes.object,
};

export default Aside;

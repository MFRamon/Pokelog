/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Paragragh from '../Paragraph';
import Title from '../Title';
import { useFetchPokemon } from '../../../utils/useFetch';


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

const Panel = ({ pokemonDetail }) => {
  const { data, isLoading } = useFetchPokemon(pokemonDetail.url);

  console.log(data);
  return (
    <Content>

      {isLoading === false
        ? (
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

        : <Title>Loading Data</Title>}

    </Content>
  );
};


Panel.defaultProps = {
  pokemonDetail: null,
};

Panel.propTypes = {
  pokemonDetail: propTypes.object,
};

export default Panel;

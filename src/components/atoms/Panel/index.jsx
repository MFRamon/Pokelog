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
  height: 40%;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
  height: 60%;
`;


const Sprite = styled.img`
  width: 6em;
  height: 6em;
`;

const Panel = ({ pokemonDetail }) => {
  const { url } = pokemonDetail;
  const { data, isLoading } = useFetchPokemon(url);

  console.log(data);
  return (
    <Content>
      {isLoading === false
        ? (
          <>
            <TopContent>
              <Title>{data.name}</Title>
              <Sprite src={`${data.sprites.front_default}`} />
            </TopContent>
            <BottomContent>
              <Paragragh>{data.base_experience}</Paragragh>
              <Paragragh>{data.height}</Paragragh>
              <Paragragh>{data.order}</Paragragh>
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

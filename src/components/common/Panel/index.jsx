/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Title, Paragraph } from '../../atoms';
import { useFetchPokemon } from '../../../utils/useFetch';
import Header from '../../atoms/Header';


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem;
  height: 100%;
`;

const TopContent = styled.div`
  margin: 2rem 2rem;
  justify-content: space-between;
  height: 50%;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  margin: 2rem 2rem;
`;

const HeaderContent = styled.div`
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const BottomContent = styled.div`
  align-items: center;
  justify-content: center;
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
              <Title>{data.name}</Title>
              <Sprite src={`${data.sprites.front_default}`} />
            </TopContent>

            <InnerWrapper>
              <HeaderContent>
                <Header>Base Experience</Header>
                <Header>Height</Header>
                <Header>Order</Header>
              </HeaderContent>

              <BottomContent>
                <Paragraph>{data.base_experience}</Paragraph>
                <Paragraph>{data.height}</Paragraph>
                <Paragraph>{data.order}</Paragraph>
              </BottomContent>
            </InnerWrapper>
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

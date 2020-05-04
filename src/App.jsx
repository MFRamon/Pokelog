import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styling/theme';
import { GlobalStyles } from './styling/global';
import {
  Layout, Container, Button, Searchbar, Logo, Panel, Title,
} from './components/atoms';
import PokemonLogo from './res/images/pokemon-logo.png';
import PokemonDarkLogo from './res/images/pokemon-logo-dark.png';
import Paragragh from './components/atoms/Paragraph';
import { Cards } from './components/common';
import { useFetchPokemons } from './utils/useFetch';

const Wrapper = styled.div`
  margin: 10rem 0;
  @media (min-width: 481px) {
    margin: 15rem 0 10rem;
    width: 65%;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0;
    width: 100%;
  }
`;

const Content = styled.div`
  max-width: 60rem;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 82%;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 82%;
`;

const WrapperPokemons = styled.div`
  width: 82%;
  height: 52vh;
  display: flex;
  flex-direction: row;
  margin: 1.0rem 1.0rem;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Aside = styled.aside`
  position: relative;
  display: flex;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const App = () => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light');
  const [word, setWord] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const { pokemons, loading } = useFetchPokemons(counter);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleChange = (e) => {
    setWord(e);
  };


  const handleSelectedPokemon = (pokemon) => {
    setSelectedItem(pokemon);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout theme={theme}>
        <Wrapper>
          <Container>
            <Content>
              <TopWrapper>
                <Logo src={theme === 'light' ? PokemonLogo : PokemonDarkLogo} />
                <Button onClick={toggleTheme}>Change Theme</Button>
              </TopWrapper>
              <Searchbar value={word} handleChange={(e) => handleChange(e.target.value)} />
              <WrapperPokemons>
                {loading === false
                  ? <Cards selected={handleSelectedPokemon} query={word} cards={pokemons} />
                  : <Paragragh>This is Loading</Paragragh>}
              </WrapperPokemons>
              <BottomWrapper>
                <Button backgroundColor="#2A2D32" whiteText={false} onClick={() => setCounter((c) => c + 20)}>Next 20 Pokemons</Button>
              </BottomWrapper>
            </Content>
          </Container>
        </Wrapper>
        <Aside>
          {selectedItem !== null ? (
            <Panel pokemonDetail={selectedItem} />
          ) : <Title>No Pokemon Selected</Title>}
        </Aside>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

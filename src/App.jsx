import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styling/theme';
import { GlobalStyles } from './styling/global';
import {
  Layout, Container, Aside, Button, Searchbar, Logo,
} from './components/atoms';
import PokemonLogo from './res/images/pokemon-logo.png';
import Paragragh from './components/atoms/Paragraph';
import { CardList } from './components/common';
import { useFetch } from './utils/useFetch';

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

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 75%;
`;

const ContentPokemons = styled.div`
  width: 75%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  margin: 1.0rem 1.0rem;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const App = () => {
  const [theme, setTheme] = useState('light');
  const [counter, setCounter] = useState(0);
  const [word, setWord] = useState('');
  const { pokemons, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${counter}&limit=20`);


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

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout theme={theme}>
        <Wrapper>
          <Container>
            <Content>
              <LogoWrapper>
                <Logo src={PokemonLogo} />
                <Button onClick={toggleTheme}>Change Theme</Button>
              </LogoWrapper>
              <Searchbar value={word} handleChange={(e) => handleChange(e.target.value)} />
              <ContentPokemons>
                {loading === false
                  ? <CardList query={word} cards={pokemons} />
                  : <Paragragh>This is Loading</Paragragh>}
              </ContentPokemons>
              <LogoWrapper>
                <Button background="#2A2D32" whiteText={false} onClick={() => setCounter((c) => c + 20)}>Next 20 Pokemons</Button>
              </LogoWrapper>
            </Content>
          </Container>
        </Wrapper>
        <Aside />
      </Layout>

    </ThemeProvider>
  );
};

export default App;

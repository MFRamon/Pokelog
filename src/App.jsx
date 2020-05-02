import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styling/theme';
import { GlobalStyles } from './styling/global';
import {
  Layout, Container, Aside, Button, Searchbar, Title,
} from './components/atoms';

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

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log('Llamo la funcion');
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout theme={theme}>
        <Wrapper>
          <Container>
            <Content>
              <Title>Pokeshop</Title>
              <Searchbar />
              <Button onClick={toggleTheme}>Change Theme</Button>
            </Content>
          </Container>
        </Wrapper>
        <Aside />
      </Layout>

    </ThemeProvider>
  );
};

export default App;

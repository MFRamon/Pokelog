import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styling/themes';
import { GlobalStyles } from './styling/global';
import Button from './components/Button';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Button theme={theme} onClick={toggleTheme}>Hello</Button>
    </ThemeProvider>
  );
};

export default App;

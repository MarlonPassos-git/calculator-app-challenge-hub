import React from 'react';
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components'
import { Display } from './components/Display';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { theme3 } from './styles/Theme'


function App(){
  return (
      <ThemeProvider theme={theme3} >
        <Header/>
        <Display />
        <Keyboard />
        <GlobalStyle />

    </ThemeProvider>
      
    
  );
}

export default App;

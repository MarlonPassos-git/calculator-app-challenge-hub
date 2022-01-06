import React from 'react';
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components'
import { theme1 } from './styles/Theme'
import { Display } from './components/Display';
import { Header } from './components/Header';

function App(){
  return (
      <ThemeProvider theme={theme1} >
        <Header/>
        <Display />
        <GlobalStyle />
    </ThemeProvider>
      
    
  );
}

export default App;

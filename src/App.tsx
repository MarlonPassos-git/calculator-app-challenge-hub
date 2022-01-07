import React, { useEffect, useState } from 'react';
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components'
import { Display } from './components/Display';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { theme1 } from './styles/Theme'
import { theme2 } from './styles/Theme'
import { theme3 } from './styles/Theme'

interface ThemeProps { 
  colors: {
    background: string,
    header: {
      text: string,
      button: {
        background: string,
        element: string,
        hover: string,
      },
    },
    display: { 
      background: string,
      text: string,
    },
    button: {
      ContainerBackground: string,
      text: {
        default: string,
        equal: string,
        wipers: string,
      },
      background: {
        default: {
          shadow: string,
          normal: string,
          hover: string,
        },
        equal: {
          shadow: string,
          normal: string,
          hover: string,
        },
        wipers: {
          shadow: string,
          normal: string,
          hover: string
        },
      }
    },
  }
}

function App() {
  
  const [themeNumber, setThemeNumber] = useState(1);
  const [theme, setTheme] = useState<ThemeProps>(theme1);
  
  useEffect(() => {
    if (themeNumber === 1) { 
      setTheme(theme1);
    }
    if (themeNumber === 2) {
      setTheme(theme2);
    }
    if (themeNumber === 3) {
      setTheme(theme3);
    }

  }, [themeNumber])


  return (
      <ThemeProvider theme={theme} >
        <Header theme={themeNumber} setTheme={setThemeNumber}/>
        <Display />
        <Keyboard />
        <GlobalStyle />

    </ThemeProvider>
      
    
  );
}

export default App;

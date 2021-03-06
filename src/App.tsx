import React, { useEffect, useState } from 'react';
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components'
import { Display } from './components/Display';
import { Header } from './components/Header';
import { Keyboard } from './components/Keyboard';
import { theme1 } from './styles/Theme'
import { DadosProvider } from './context/context';


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

    if (localStorage.getItem('themeNumber') === null) {
      localStorage.setItem('themeNumber', '1');
    }
    else { 
      //@ts-ignore
      setThemeNumber(+localStorage.getItem('themeNumber'));
    }

    window.addEventListener('keydown', (e: KeyboardEvent) => { 
      const keys = document.querySelectorAll('[data-value]')
      const keysValue: (string|null)[] = [] 
      const exception = {
        del: 'Backspace',
        '=': 'Enter',
        'reset': 'r',
      }

      keys.forEach((key) => { 
        const keyValue = key.getAttribute('data-value');

        // @ts-ignore
        if (exception[keyValue]) {
          // @ts-ignore
            keysValue.push(exception[keyValue])
        }
        else {
          keysValue.push(keyValue)
        }

      })

      if (keysValue.includes(e.key)) { 
        const position = keysValue.indexOf(e.key);
        // @ts-ignore
        keys[position].click();
      }
    })

    
  }, [])
  
  useEffect(() => {
    
    

    if (themeNumber === 1) { 
      import('./styles/themes/theme1').then((theme) => { 
        setTheme(theme.default);
        })
    }
    if (themeNumber === 2) {
      import('./styles/themes/theme2').then((theme) => { 
        setTheme(theme.default);
        })
    }
    if (themeNumber === 3) {
      import('./styles/themes/theme3').then((theme) => { 
        setTheme(theme.default);
        })
    }

    localStorage.setItem('themeNumber', themeNumber.toString());
  }, [themeNumber])


  return (
    <DadosProvider>
      <ThemeProvider theme={theme} >
        <Header theme={themeNumber} setTheme={setThemeNumber}/>
        <Display />
        <Keyboard />
        <GlobalStyle />
      </ThemeProvider>
    </DadosProvider>
  );
}

export default App;

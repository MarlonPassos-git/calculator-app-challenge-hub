import React from 'react';
import "the-new-css-reset/css/reset.css"
import { GlobalStyle } from './styles/GlobalStyled';
import { ThemeProvider } from 'styled-components'
import { theme1 } from './styles/Theme'
import { Display } from './components/Display';

/* interface ThemeProps { 
   colors: {
        background: String,
        header: {
            text: String,
            button: {
                background: String,
                element: String,
                hover: String,
            },
        },
        display: {
            background: String,
            text: String,
        },
        button: {
            ContainerBackground: String,
            text: {
                default: String,
                equal: String,
                wipers: String,
            },
            background: {
                default: {
                    normal: String,
                    hover: String,
                },
                equal: {
                    normal: String,
                    hover: String,
                },
                wipers: {
                    normal: String,
                    hover: String
                },
            }
        },
    }
} */

function App(){
  return (
    <ThemeProvider theme={ theme1 } >
      <Display />
      <GlobalStyle />
    </ThemeProvider>
      
    
  );
}

export default App;

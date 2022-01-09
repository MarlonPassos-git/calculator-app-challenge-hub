import { createGlobalStyle  } from 'styled-components'
import { progressiveClamp, Rem } from 'progressive-size'

export const GlobalStyle = createGlobalStyle`

    

    :root {
        // Fonts
        --font-extra-large: ${progressiveClamp(32, 48)}; 
        --font-large: ${Rem(32)};
        --font-medium: ${progressiveClamp(28, 32)};
        --font-small: ${progressiveClamp(16, 20)};
        --font-extra-small: ${Rem(12)};
    }


    body {
        background-color: ${ props => props.theme.colors.background };
        font-family: 'Spartan', sans-serif;
        font-weight: bold;

        display: grid;
        place-items: center;
        min-height: 100vh;
    }

    #root {
        width: fill-available;
        max-width: ${Rem(540)};
        margin: ${Rem(28)} ${Rem(24)} ${Rem(31)};
    }

    button {
        cursor: pointer;
        border: none;
    }

    

`
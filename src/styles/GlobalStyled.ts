import { createGlobalStyle  } from 'styled-components'
import { progressiveClamp, Rem } from 'progressive-size'

export const GlobalStyle = createGlobalStyle`

    :root {
        // Fonts
        --font-extra-large: ${progressiveClamp(32, 48)} 
        --font-large: ${Rem(32)}
        --font-medium: ${progressiveClamp(28, 32)}
        --font-small: ${progressiveClamp(16, 20)}
        --font-extra-small: ${Rem(12)}
    }


    body {
        background: red;
        font-family: 'Spartan', sans-serif;
        font-weight: bold;
    }

    button {
        cursor: pointer;
    }

`
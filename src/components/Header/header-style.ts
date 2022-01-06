import styled from 'styled-components'
import { Rem } from 'progressive-size'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    height: ${Rem(44)};

    

`


export const Title = styled.h1`


    font-size: var(--font-large);
    color: ${props => props.theme.colors.header.text};
`


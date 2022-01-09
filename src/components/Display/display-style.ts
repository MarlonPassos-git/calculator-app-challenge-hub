import styled from 'styled-components'
import { progressiveClamp, Rem } from 'progressive-size'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: ${progressiveClamp(88, 118)};
    width: 100%;
    margin: ${Rem(32)} 0 ${Rem(24)};
    border-radius: ${Rem(10)}; 
    padding: 0 ${progressiveClamp(24, 32)};

    background: ${props => props.theme.colors.display.background};
`

export const Equation = styled.input`
background-color: transparent ;
    font-size: var(--font-extra-large);
    color: ${props => props.theme.colors.display.text};
    width: 100%;
    text-align: right;
    
`

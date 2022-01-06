import { Rem } from 'progressive-size'
import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template: 
        ". wrapperButtons"
        "name range"
        1fr / ${Rem(71)}
    ;


    width: ${Rem(144)};
    height: 100%;

`

export const Button = styled.button`

    color: ${props => props.theme.colors.header.text};
    font-size: var(--font-extra-small);

`

export const Range = styled.input`
    grid-area: range;

    width: 100%;
    height: ${Rem(26)};
    padding: ${Rem(5)};

    border-radius: ${Rem(13)};
    background-color: ${props => props.theme.colors.header.button.background};

    cursor: pointer;

`

export const WrapperButtons = styled.div`
    grid-area: wrapperButtons;
    display: flex;
    justify-content: space-evenly;
    align-self: start;
`

export const Name = styled.span`
    grid-area: name;
    align-self: center;

    text-transform: uppercase;
    font-size: var(--font-extra-small);
    color: ${props => props.theme.colors.header.text};

`
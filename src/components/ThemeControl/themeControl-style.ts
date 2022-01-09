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
    padding: 1px 5px;
    background-color: transparent;
    color: ${props => props.theme.colors.header.text};
    font-size: var(--font-extra-small);

    &:hover, &:focus, &:focus-visible {
        color: ${props => props.theme.colors.header.button.hover}
    }

`

export const Range = styled.input`
    grid-area: range;

    width: 100%;
    height: ${Rem(26)};
    padding: ${Rem(5)};

    border-radius: ${Rem(13)};
    background-color: ${props => props.theme.colors.header.button.background};

    cursor: pointer;

    &:focus-visible {
        outline: 
            2px   
            ${props => props.theme.colors.header.button.element}
            solid
        ;
    }
    
    &::-webkit-slider-thumb {
        appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${props => props.theme.colors.header.button.element};
        border: none;
        &:hover, &:focus, &:focus-visible {
            background: ${props => props.theme.colors.header.button.hover};
        }
    }

   &::-moz-range-thumb {
       appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: ${props => props.theme.colors.header.button.element};
        border: none;


        &:hover {
            background: ${props => props.theme.colors.header.button.hover};
        }
    }
    
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